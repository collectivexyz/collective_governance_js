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

import { connect, getProvider } from './connect';
import { Config } from './config';
import { LoggerFactory } from './logging';
import { blocktimeNow, timeNow, timeout } from './time';

const logger = LoggerFactory.getLogger(module.filename);

// this shows an example of configuring a vault with
// an attached payment

// this example is using this example contract to management payments
// https://github.com/jac18281828/transfervault

const run = async () => {
  try {
    const config = new Config();

    if (!config.vaultContract) {
      throw Error('Vault not configured');
    }

    const provider = await getProvider(config);

    const collective = await connect();

    const proposalId = await collective.governance.propose();
    const blockTime = await blocktimeNow(provider);
    const blockTimeDelta = Math.abs(blockTime - timeNow());

    // add 10 minutes to ensure eta is within allowable lock range
    const etaOfLock = timeNow() + config.getMinimumDuration() + blockTimeDelta + 10 * 60;

    await collective.governance.attachTransaction(
      proposalId,
      config.vaultContract,
      config.getVaultValue(),
      config.vaultSignature,
      config.vaultCalldata,
      etaOfLock
    );

    await collective.governance.configure(proposalId, 1);

    const quorum = await collective.storage.quorumRequired(proposalId);
    const duration = await collective.storage.voteDuration(proposalId);

    logger.info(`New Vote - ${proposalId}: quorum=${quorum}, duration=${duration}`);

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
      const sleepFor = Math.max(endTime - timeNow() + blockTimeDelta, 1);
      logger.info(`Voting in progress... sleeping for ${sleepFor}`);
      logger.info(`endTime: ${new Date(endTime * 1000).toISOString()}`);
      logger.flush();
      await timeout(sleepFor * 1000);
      voteStatus = await collective.governance.isOpen(proposalId);
    }

    while (timeNow() < etaOfLock) {
      const remainingTime = etaOfLock - timeNow();
      logger.info(`Awaiting timeLock... sleeping for ${remainingTime}`);
      await timeout(remainingTime * 1000);
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
