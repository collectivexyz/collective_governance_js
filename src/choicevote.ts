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

import Web3 from 'web3';

import { Config } from './config';
import { proposalBuilder, connect } from './connect';
import { LoggerFactory } from './logging';
import { blocktimeNow, timeNow, timeout } from '@collectivexyz/governance';

const logger = LoggerFactory.getLogger(module.filename);

async function run() {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);

    logger.info(`Governance Started`);
    const builder = await proposalBuilder();
    const blockTime = await blocktimeNow(web3);
    const blockTimeDelta = Math.abs(blockTime - timeNow());
    // add 10 minutes to ensure eta is within allowable lock range
    const etaOfLock = timeNow() + config.getMinimumDuration() + blockTimeDelta + 10 * 60;
    await builder.aProposal();
    await builder.withDescription(
      'Who is the greatest in the world?',
      'https://github.com/collectivexyz/collective_governance_js'
    );

    
    await builder.withTransaction(
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000000',
      etaOfLock
    );
    await builder.withChoice('Erling Haaland', 'Norwegian striker', 1);
    await builder.withTransaction(
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000001',
      etaOfLock
    );
    await builder.withChoice('Karim Benzema', 'French forward', 2);
    await builder.withTransaction(
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000002',
      etaOfLock
    );
    await builder.withChoice('Sadio Mané', 'Senegal striker', 3);
    await builder.withTransaction(
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000003',
      etaOfLock
    );
    await builder.withChoice('Robert Lewandowski', 'Polish striker', 4);
    await builder.withTransaction(
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000004',
      etaOfLock
    );
    await builder.withChoice('Mohamed Salah', 'Egyptian forward', 5);

    await builder.withMeta( 'vote_start', new Date().toISOString());
    const metaId = 1;
    await builder.withMeta('vote_eta', new Date(etaOfLock * 1000).toISOString());
    await builder.withQuorum(3);
    await builder.withDelay(300);
    await builder.withDuration(3600);
    const proposalId = await builder.build();

    const collective = await connect();
    const quorum = await collective.storage.quorumRequired(proposalId);
    const duration = await collective.storage.voteDuration(proposalId);

    logger.info(`Choice Vote - ${proposalId}: quorum=${quorum}, duration=${duration}`);

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
    await collective.governance.voteChoice(proposalId, 2);

    const desc = await collective.meta.getMetaDescription(proposalId);
    logger.info(`Description: ${desc}`);

    const url = await collective.meta.getMetaUrl(proposalId);
    logger.info(`Url: ${url}`);

    const metaData = await collective.meta.getMeta(proposalId, metaId);
    logger.info(`Attached Data: ${metaData.name}: ${metaData.value}`);

    let voteStatus = await collective.governance.isOpen(proposalId);
    const endTime = await collective.storage.endTime(proposalId);
    while (voteStatus) {
      const sleepFor = Math.max(endTime - timeNow() + blockTimeDelta, 1);
      logger.info(`Voting in progress...sleeping for ${sleepFor}`);
      logger.info(`endTime: ${new Date(endTime * 1000).toISOString()}`);
      logger.flush();
      await timeout(sleepFor * 1000);
      voteStatus = await collective.governance.isOpen(proposalId);
    }

    while (timeNow() < etaOfLock) {
      const remainingTime = etaOfLock - timeNow();
      logger.info(`Awaiting timeLock... sleeping for ${remainingTime}`);
      logger.flush();
      await timeout(remainingTime * 1000);
    }

    await collective.governance.endVote(proposalId);
    const cCount = await collective.storage.choiceCount(proposalId);
    for (let id = 0; id < cCount; id++) {
      const choice = await collective.storage.getChoice(proposalId, id);
      logger.info(`Choice ${id + 1}, ${choice.name}, ${choice.description}, ${choice.transactionId}, ${choice.voteCount}`);
    }

    const measurePassed = await collective.governance.voteSucceeded(proposalId);
    if (measurePassed) {
      const choiceId = await collective.storage.getWinningChoice(proposalId);
      const choice = await collective.storage.getChoice(proposalId, choiceId);
      logger.info(
        `There is a winner: ${choiceId}, ${choice.name}, ${choice.description}, ${choice.transactionId}, ${choice.voteCount}`
      );
    } else {
      logger.info('The measure has failed');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
}

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
