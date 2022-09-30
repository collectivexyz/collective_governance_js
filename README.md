# Collective Governance TypeScript Reference

# Getting Started

### Gas Limit

Be sure to set the gas limit for the operation you are performing.   The default limit 470000 is
sufficient for many types of operations but construction and building operations may require 10x that.

## Create a Voter Class using VoterClass Builder

1. Set VOTER_FACTORY in `.env` and run `yarn create_voterclass`
2. The VoterClass address is stored in the voterClass parameter of the `VoterClassCreated` event
3. Add the VoterClass address to the `.env` and run `yarn create_governance`
   This will run the GovernanceBuilder and create a governance contract for the specified VoterClass.
   Set the `CONTRACT_ADDRESS` in `.env`

# Contract Deployments

| Contract          | Ethereum Address                           | Description |
| ----------------- | ------------------------------------------ | ------- |
| VoterClass | 0xFC8711995314254897512Cb964A926E15965d531 | Class contract for 0xE3C82840FA0605a424Cc1ea6BC013D12909E4e69 enumerable contract   |
| Governance | 0x603ae765e250F87bB6Abd38F6AC8371ce1A7d0C4 | Governance contract for 0xFC8711995314254897512Cb964A926E15965d531 voter class   |


## Example

A vote using the `simplevote.ts`:

```
mr@080e1bc37852:/workspaces/collective_governance_js$ yarn start
yarn run v1.22.19
$ node dist/simplevote.js
[
    {
        "level": 30,
        "time": 1663259362465,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Governance Started"
    },
    {
        "level": 30,
        "time": 1663259366579,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Wallet connected: 0xXXXXXXXXXXX"
    },
    {
        "level": 30,
        "time": 1663259366579,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Loading ABI: abi/Governance.json"
    },
    {
        "level": 30,
        "time": 1663259366581,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Connected to contract 0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4"
    },
    {
        "level": 30,
        "time": 1663259366581,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Loading ABI: abi/VoteStrategy.json"
    },
    {
        "level": 30,
        "time": 1663259366582,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Connected to contract: 0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4"
    },
    {
        "level": 30,
        "time": 1663259366698,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "collective.xyz governance: 1"
    },
    {
        "level": 30,
        "time": 1663259366730,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/storage.js",
        "msg": "Loading ABI: abi/Storage.json"
    },
    {
        "level": 30,
        "time": 1663259366789,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "collective.xyz governance storage: 1"
    },
    {
        "level": 20,
        "time": 1663259366789,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Propose new vote."
    },
    {
        "level": 30,
        "time": 1663259389246,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0xab910d3b1684feda04287b0c2b977d23ba3482cf72b3f2b8b5480c059478feda",
        "blockNumber": 7597805,
        "contractAddress": null,
        "cumulativeGasUsed": 559582,
        "effectiveGasPrice": 2500000009,
        "from": "0xXXXXXXXXXXX",
        "gasUsed": 180116,
        "logsBloom": "0x00000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000020000000000000000000000000000000000000001000000000080000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000400000000000001000000000000000000000000000000080000200000000000000000000000008200000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000",
        "status": true,
        "to": "0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4",
        "transactionHash": "0xca210c7764198387c7dd53b2ebbf95aea1f02cf1134fe3c4356e9ca7545e58c8",
        "transactionIndex": 3,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597805,
                "transactionHash": "0xca210c7764198387c7dd53b2ebbf95aea1f02cf1134fe3c4356e9ca7545e58c8",
                "transactionIndex": 3,
                "blockHash": "0xab910d3b1684feda04287b0c2b977d23ba3482cf72b3f2b8b5480c059478feda",
                "logIndex": 2,
                "removed": false,
                "id": "log_ee85a0dd",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
                    "topics": [
                        "0x7cf51672c814e3300d0faf0664fb0ac19e53da5bfe6f465cc0da27941ec40549"
                    ]
                }
            },
            "1": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597805,
                "transactionHash": "0xca210c7764198387c7dd53b2ebbf95aea1f02cf1134fe3c4356e9ca7545e58c8",
                "transactionIndex": 3,
                "blockHash": "0xab910d3b1684feda04287b0c2b977d23ba3482cf72b3f2b8b5480c059478feda",
                "logIndex": 3,
                "removed": false,
                "id": "log_6fc308b7",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
                    "topics": [
                        "0xd8f38c77be5ebb36a1e29ae7a23de4232fc648f010b7fe4929d97b848f014f42"
                    ]
                }
            },
            "ProposalCreated": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597805,
                "transactionHash": "0xca210c7764198387c7dd53b2ebbf95aea1f02cf1134fe3c4356e9ca7545e58c8",
                "transactionIndex": 3,
                "blockHash": "0xab910d3b1684feda04287b0c2b977d23ba3482cf72b3f2b8b5480c059478feda",
                "logIndex": 4,
                "removed": false,
                "id": "log_7c12ca33",
                "returnValues": {
                    "0": "0xXXXXXXXXXXX",
                    "1": "4",
                    "sender": "0xXXXXXXXXXXX",
                    "proposalId": "4"
                },
                "event": "ProposalCreated",
                "signature": "0xe28da1d80dec4ece82645bd52ae6a4118887a7cb56436b4024affa3b5d4463c9",
                "raw": {
                    "data": "0x0000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad0000000000000000000000000000000000000000000000000000000000000004",
                    "topics": [
                        "0xe28da1d80dec4ece82645bd52ae6a4118887a7cb56436b4024affa3b5d4463c9"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1663259389246,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Token contract is 0xE3C82840FA0605a424Cc1ea6BC013D12909E4e69"
    },
    {
        "level": 20,
        "time": 1663259389246,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "configure vote."
    },
    {
        "level": 30,
        "time": 1663259412905,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x8fb15b8f3b1cde89b2885ebe8d6e87fbba01fba4eb433c31e5f0706da71dc147",
        "blockNumber": 7597807,
        "contractAddress": null,
        "cumulativeGasUsed": 1396277,
        "effectiveGasPrice": 2500000008,
        "from": "0xXXXXXXXXXXX",
        "gasUsed": 120297,
        "logsBloom": "0x00000000000400000000000000000000000000000004000000000000000000000004000000000000000000200000000800000000000000000000000000000000000000000000000000000000000200001000000000000000000000000000080000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000400000000000001000000000000000000000000000000000000000000000000000000000000008200000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": true,
        "to": "0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4",
        "transactionHash": "0x37b38e1a3e3f663e510db1d09c2a8d3690687fe4611d9aa8e1e773a9e0671dc8",
        "transactionIndex": 3,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597807,
                "transactionHash": "0x37b38e1a3e3f663e510db1d09c2a8d3690687fe4611d9aa8e1e773a9e0671dc8",
                "transactionIndex": 3,
                "blockHash": "0x8fb15b8f3b1cde89b2885ebe8d6e87fbba01fba4eb433c31e5f0706da71dc147",
                "logIndex": 2,
                "removed": false,
                "id": "log_d7b64b15",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0xcfcba2a684eed9cd78a49dafc90621aaa580a2bfab920591bbc7e9ece0245720"
                    ]
                }
            },
            "1": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597807,
                "transactionHash": "0x37b38e1a3e3f663e510db1d09c2a8d3690687fe4611d9aa8e1e773a9e0671dc8",
                "transactionIndex": 3,
                "blockHash": "0x8fb15b8f3b1cde89b2885ebe8d6e87fbba01fba4eb433c31e5f0706da71dc147",
                "logIndex": 3,
                "removed": false,
                "id": "log_8100b7c9",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000073eeef000000000000000000000000000000000000000000000000000000000073eef4",
                    "topics": [
                        "0x95db3ebf80e682da3ef7e61348edc60ad062b20c65b59cb0414cafad8f11c35d"
                    ]
                }
            },
            "ProposalOpen": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597807,
                "transactionHash": "0x37b38e1a3e3f663e510db1d09c2a8d3690687fe4611d9aa8e1e773a9e0671dc8",
                "transactionIndex": 3,
                "blockHash": "0x8fb15b8f3b1cde89b2885ebe8d6e87fbba01fba4eb433c31e5f0706da71dc147",
                "logIndex": 4,
                "removed": false,
                "id": "log_096182d0",
                "returnValues": {
                    "0": "4",
                    "proposalId": "4"
                },
                "event": "ProposalOpen",
                "signature": "0x22275e343a3f87b48eef0aaba66399e614dbddbcaf4c1b665863a05657d3429b",
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "topics": [
                        "0x22275e343a3f87b48eef0aaba66399e614dbddbcaf4c1b665863a05657d3429b"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1663259412965,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "New Vote - 4: quorum=1, duration=5"
    },
    {
        "level": 20,
        "time": 1663259413016,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "open vote."
    },
    {
        "level": 30,
        "time": 1663259436917,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x9b7eeda450e73eb292152d167d5d669ad6aea8a972cb454951eb5792ac352517",
        "blockNumber": 7597809,
        "contractAddress": null,
        "cumulativeGasUsed": 313596,
        "effectiveGasPrice": 2500000008,
        "from": "0xXXXXXXXXXXX",
        "gasUsed": 66899,
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800080000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": true,
        "to": "0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4",
        "transactionHash": "0xb042b15558bb6ad7e619478694edff02b4826c86098c59110fddb60f7729ffbd",
        "transactionIndex": 1,
        "type": "0x2",
        "events": {
            "VoteOpen": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597809,
                "transactionHash": "0xb042b15558bb6ad7e619478694edff02b4826c86098c59110fddb60f7729ffbd",
                "transactionIndex": 1,
                "blockHash": "0x9b7eeda450e73eb292152d167d5d669ad6aea8a972cb454951eb5792ac352517",
                "logIndex": 0,
                "removed": false,
                "id": "log_7e779629",
                "returnValues": {
                    "0": "4",
                    "proposalId": "4"
                },
                "event": "VoteOpen",
                "signature": "0x5d469d2b52ad2869c190670786404d49084b5a4fbc283f35510286534da7fd32",
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "topics": [
                        "0x5d469d2b52ad2869c190670786404d49084b5a4fbc283f35510286534da7fd32"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1663259436917,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting is open..."
    },
    {
        "level": 20,
        "time": 1663259436918,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "vote for"
    },
    {
        "level": 30,
        "time": 1663259449540,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x73d7561552f0a3fbc0f04e1189430615bf00fe650e5fca60682f71ec1f8be041",
        "blockNumber": 7597810,
        "contractAddress": null,
        "cumulativeGasUsed": 516327,
        "effectiveGasPrice": 2500000008,
        "from": "0xXXXXXXXXXXX",
        "gasUsed": 387955,
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000020000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000400000008000001000000000000000000000000000000000000000000000000000000000000008200000000400000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": true,
        "to": "0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4",
        "transactionHash": "0xd8dee56eebd6ace9f923787a341f08d534c394ef77b2cbc209e686a322f984ad",
        "transactionIndex": 3,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597810,
                "transactionHash": "0xd8dee56eebd6ace9f923787a341f08d534c394ef77b2cbc209e686a322f984ad",
                "transactionIndex": 3,
                "blockHash": "0x73d7561552f0a3fbc0f04e1189430615bf00fe650e5fca60682f71ec1f8be041",
                "logIndex": 3,
                "removed": false,
                "id": "log_efb2f28e",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x0271f53eebbe20450d9578f28ec279231556c34545b30e2278d754ffd39cd63c"
                    ]
                }
            },
            "1": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597810,
                "transactionHash": "0xd8dee56eebd6ace9f923787a341f08d534c394ef77b2cbc209e686a322f984ad",
                "transactionIndex": 3,
                "blockHash": "0x73d7561552f0a3fbc0f04e1189430615bf00fe650e5fca60682f71ec1f8be041",
                "logIndex": 4,
                "removed": false,
                "id": "log_78706fbf",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x0271f53eebbe20450d9578f28ec279231556c34545b30e2278d754ffd39cd63c"
                    ]
                }
            },
            "2": {
                "address": "0xA231c514A17e89841Cea4f8E48EeebBF156B9cef",
                "blockNumber": 7597810,
                "transactionHash": "0xd8dee56eebd6ace9f923787a341f08d534c394ef77b2cbc209e686a322f984ad",
                "transactionIndex": 3,
                "blockHash": "0x73d7561552f0a3fbc0f04e1189430615bf00fe650e5fca60682f71ec1f8be041",
                "logIndex": 5,
                "removed": false,
                "id": "log_c83c99c9",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x0271f53eebbe20450d9578f28ec279231556c34545b30e2278d754ffd39cd63c"
                    ]
                }
            },
            "VoteTally": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597810,
                "transactionHash": "0xd8dee56eebd6ace9f923787a341f08d534c394ef77b2cbc209e686a322f984ad",
                "transactionIndex": 3,
                "blockHash": "0x73d7561552f0a3fbc0f04e1189430615bf00fe650e5fca60682f71ec1f8be041",
                "logIndex": 6,
                "removed": false,
                "id": "log_66abdc27",
                "returnValues": {
                    "0": "4",
                    "1": "0xXXXXXXXXXXX",
                    "2": "3",
                    "proposalId": "4",
                    "wallet": "0xXXXXXXXXXXX",
                    "count": "3"
                },
                "event": "VoteTally",
                "signature": "0x5242794405419a0327b515a56c055b40741fd293b8cede7d0491c83e19b5f533",
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad0000000000000000000000000000000000000000000000000000000000000003",
                    "topics": [
                        "0x5242794405419a0327b515a56c055b40741fd293b8cede7d0491c83e19b5f533"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1663259449618,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 4000"
    },
    {
        "level": 30,
        "time": 1663259453649,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 4000"
    },
    {
        "level": 30,
        "time": 1663259457665,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 4000"
    },
    {
        "level": 30,
        "time": 1663259461686,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259463703,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259465723,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259467740,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259469763,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259471781,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 30,
        "time": 1663259473800,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "Voting in progress...sleeping for 2000"
    },
    {
        "level": 20,
        "time": 1663259475853,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "end vote."
    },
    {
        "level": 30,
        "time": 1663259497698,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x8fc5db50bee003b210fc03188fe8cc71b8f9223266b12de788cbd5c71f6bd79c",
        "blockNumber": 7597814,
        "contractAddress": null,
        "cumulativeGasUsed": 179480,
        "effectiveGasPrice": 2500000008,
        "from": "0xXXXXXXXXXXX",
        "gasUsed": 44664,
        "logsBloom": "0x00000000000000000000000000000000000000800000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000",
        "status": true,
        "to": "0x4d3caafbe204d8ce04f8dd288d9463d49b363aa4",
        "transactionHash": "0x5b18284b022c4334446487ccd0b24c4aa5ad65bcb523f70a871eaf4fae7f351e",
        "transactionIndex": 2,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597814,
                "transactionHash": "0x5b18284b022c4334446487ccd0b24c4aa5ad65bcb523f70a871eaf4fae7f351e",
                "transactionIndex": 2,
                "blockHash": "0x8fc5db50bee003b210fc03188fe8cc71b8f9223266b12de788cbd5c71f6bd79c",
                "logIndex": 5,
                "removed": false,
                "id": "log_0cd8e908",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "topics": [
                        "0x887777ccf43690541bed9e00b10d0fccfa7520b11875f09847a57b3085d8ab92"
                    ]
                }
            },
            "VoteClosed": {
                "address": "0x4d3CaAfbe204d8CE04f8Dd288D9463d49b363AA4",
                "blockNumber": 7597814,
                "transactionHash": "0x5b18284b022c4334446487ccd0b24c4aa5ad65bcb523f70a871eaf4fae7f351e",
                "transactionIndex": 2,
                "blockHash": "0x8fc5db50bee003b210fc03188fe8cc71b8f9223266b12de788cbd5c71f6bd79c",
                "logIndex": 4,
                "removed": false,
                "id": "log_4abb5538",
                "returnValues": {
                    "0": "4",
                    "proposalId": "4"
                },
                "event": "VoteClosed",
                "signature": "0xbc12589e76c0d59fd5a7c6f642c154830f0b46718b5ac07d1a0bdf29e124cbd8",
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
                    "topics": [
                        "0xbc12589e76c0d59fd5a7c6f642c154830f0b46718b5ac07d1a0bdf29e124cbd8"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1663259497728,
        "pid": 339,
        "hostname": "codespaces-9dd982",
        "module": "/workspaces/collective_governance_js/dist/simplevote.js",
        "msg": "The measure has passed"
    }
]
```
