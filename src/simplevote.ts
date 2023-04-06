// SPDX-License-Identifier: BSD-3-Clause
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, collective
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { connect } from './connect';
import { LoggerFactory } from './logging';
import { timeNow, blocktimeNow, timeout } from '@collectivexyz/governance';

const logger = LoggerFactory.getLogger(module.filename);

const run = async () => {
  try {
    const collective = await connect();

    const proposalId = await collective.governance.propose();
    await collective.governance.configureWithDelay(proposalId, 10, 300, 3600);
    
    const quorum = await collective.storage.quorumRequired(proposalId);
    const duration = await collective.storage.voteDuration(proposalId);

    logger.info(`New Vote - ${proposalId}: quorum=${quorum}, duration=${duration}`);

    const blockTime = await blocktimeNow(collective.web3);
    const blockTimeDelta = Math.abs(blockTime - timeNow());
    const startTime = await collective.storage.startTime(proposalId);
    while (timeNow() < startTime + blockTimeDelta) {
      const deltaTime = Math.max(startTime - timeNow(), 1);
      logger.info(`Waiting for start ... ${deltaTime} s`);
      logger.flush();
      await timeout(deltaTime * 1000);
    }

    await collective.governance.startVote(proposalId);
    logger.info('Voting started...');

    // voting shares
    await collective.governance.voteFor(proposalId);

    let voteStatus = await collective.governance.isOpen(proposalId);
    const endTime = await collective.storage.endTime(proposalId);
    while (voteStatus) {
      const voteWait = Math.min(endTime - timeNow() + blockTimeDelta, 300);
      const sleepFor = Math.max(voteWait, 1);
      logger.info(`Voting in progress...sleeping for ${sleepFor}`);
      logger.info(`endTime: ${new Date(endTime * 1000).toISOString()}`);
      logger.flush();
      await timeout(sleepFor * 1000);
      voteStatus = await collective.governance.isOpen(proposalId);
    }

    await collective.governance.endVote(proposalId);

    const measurePassed = await collective.governance.voteSucceeded(proposalId);
    if (measurePassed) {
      logger.info('The measure has passed');
    } else {
      logger.info('The measure has failed');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
