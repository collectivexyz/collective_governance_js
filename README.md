# collective_governance example

```
mr@080e1bc37852:/workspaces/collective_governance_js$ yarn start
yarn run v1.22.19
$ node dist/index.js
[
    {
        "level": 30,
        "time": 1661195832939,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Governance Started at Block: 7453263"
    },
    {
        "level": 30,
        "time": 1661195832962,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Wallet connected: 0x6CEb0bF1f28ca4165d5C0A04f61DC733987eD6ad"
    },
    {
        "level": 30,
        "time": 1661195832962,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Loading ABI: contracts/Governance.json"
    },
    {
        "level": 30,
        "time": 1661195832968,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "msg": "Loading ABI: contracts/VoteStrategy.json"
    },
    {
        "level": 30,
        "time": 1661195847098,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x0f61bbd644c8b40a48a2c7a47a4981d95b6b1b4147bdfffb53ff1339e5fc0039",
        "blockNumber": 7453264,
        "contractAddress": null,
        "cumulativeGasUsed": 1508648,
        "effectiveGasPrice": 2500867860,
        "from": "0x6ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
        "gasUsed": 364677,
        "logsBloom": "0x00000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000020000000000000000000000000000000000000001000000000000000000000000000000000000200000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000080000200400000000000000000000000000000000000000002000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000080000000004010000000000000",
        "status": true,
        "to": "0xa97f85715be0db0050698f94d0fb4018540133ce",
        "transactionHash": "0xb52e01e4d45ec1bc554b6fa8525b283319a5da81482bcf23725f4dae34cc24a5",
        "transactionIndex": 2,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453264,
                "transactionHash": "0xb52e01e4d45ec1bc554b6fa8525b283319a5da81482bcf23725f4dae34cc24a5",
                "transactionIndex": 2,
                "blockHash": "0x0f61bbd644c8b40a48a2c7a47a4981d95b6b1b4147bdfffb53ff1339e5fc0039",
                "logIndex": 11,
                "removed": false,
                "id": "log_c1fd918a",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a97f85715be0db0050698f94d0fb4018540133ce",
                    "topics": [
                        "0x7cf51672c814e3300d0faf0664fb0ac19e53da5bfe6f465cc0da27941ec40549"
                    ]
                }
            },
            "1": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453264,
                "transactionHash": "0xb52e01e4d45ec1bc554b6fa8525b283319a5da81482bcf23725f4dae34cc24a5",
                "transactionIndex": 2,
                "blockHash": "0x0f61bbd644c8b40a48a2c7a47a4981d95b6b1b4147bdfffb53ff1339e5fc0039",
                "logIndex": 12,
                "removed": false,
                "id": "log_146d4379",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
                    "topics": [
                        "0xd8f38c77be5ebb36a1e29ae7a23de4232fc648f010b7fe4929d97b848f014f42"
                    ]
                }
            },
            "2": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453264,
                "transactionHash": "0xb52e01e4d45ec1bc554b6fa8525b283319a5da81482bcf23725f4dae34cc24a5",
                "transactionIndex": 2,
                "blockHash": "0x0f61bbd644c8b40a48a2c7a47a4981d95b6b1b4147bdfffb53ff1339e5fc0039",
                "logIndex": 13,
                "removed": false,
                "id": "log_9c2d6124",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a97f85715be0db0050698f94d0fb4018540133ce",
                    "topics": [
                        "0xd8f38c77be5ebb36a1e29ae7a23de4232fc648f010b7fe4929d97b848f014f42"
                    ]
                }
            },
            "ProposalCreated": {
                "address": "0xA97f85715BE0db0050698F94d0fB4018540133Ce",
                "blockNumber": 7453264,
                "transactionHash": "0xb52e01e4d45ec1bc554b6fa8525b283319a5da81482bcf23725f4dae34cc24a5",
                "transactionIndex": 2,
                "blockHash": "0x0f61bbd644c8b40a48a2c7a47a4981d95b6b1b4147bdfffb53ff1339e5fc0039",
                "logIndex": 14,
                "removed": false,
                "id": "log_eab4f2c9",
                "returnValues": {
                    "0": "0x6CEb0bF1f28ca4165d5C0A04f61DC733987eD6ad",
                    "1": "1",
                    "proposer": "0x6CEb0bF1f28ca4165d5C0A04f61DC733987eD6ad",
                    "proposalId": "1"
                },
                "event": "ProposalCreated",
                "signature": "0xe28da1d80dec4ece82645bd52ae6a4118887a7cb56436b4024affa3b5d4463c9",
                "raw": {
                    "data": "0x0000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0xe28da1d80dec4ece82645bd52ae6a4118887a7cb56436b4024affa3b5d4463c9"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1661195847173,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "New Vote - collective.xyz governance: 1"
    },
    {
        "level": 30,
        "time": 1661195881383,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
        "blockNumber": 7453266,
        "contractAddress": null,
        "cumulativeGasUsed": 328667,
        "effectiveGasPrice": 2500690247,
        "from": "0x6ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
        "gasUsed": 328667,
        "logsBloom": "0x00000000000400000000000000000000000000000004000000000800000000000004000000000000000000200000000800000000000000000000000000000000000000000000000000000000000200001000000000000000000000000800000000000000000000000000000200000000000000000000000200000000000000000000000000000800000000000000000000000000000000000000000000000000004200000010000000000000000400000000000000000000000000000000000000002000000000000000000000000008000000000000000001000000000000000000000000000000000000000000000000000080000000004000000000000000",
        "status": true,
        "to": "0xa97f85715be0db0050698f94d0fb4018540133ce",
        "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
        "transactionIndex": 0,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453266,
                "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
                "transactionIndex": 0,
                "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
                "logIndex": 0,
                "removed": false,
                "id": "log_784002e2",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0xcfcba2a684eed9cd78a49dafc90621aaa580a2bfab920591bbc7e9ece0245720"
                    ]
                }
            },
            "1": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453266,
                "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
                "transactionIndex": 0,
                "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
                "logIndex": 1,
                "removed": false,
                "id": "log_6ff717e5",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dcb27c0bf715f6f5d3a91fd19c872778687efa56",
                    "topics": [
                        "0xa430a7495b8ff0e5b94f8ee77bace3dc76bf577aaa049dea7c4aa60ef585fdcb"
                    ]
                }
            },
            "2": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453266,
                "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
                "transactionIndex": 0,
                "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
                "logIndex": 2,
                "removed": false,
                "id": "log_c1796ce0",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000071ba52000000000000000000000000000000000000000000000000000000000071ba5c",
                    "topics": [
                        "0x95db3ebf80e682da3ef7e61348edc60ad062b20c65b59cb0414cafad8f11c35d"
                    ]
                }
            },
            "3": {
                "address": "0xA97f85715BE0db0050698F94d0fB4018540133Ce",
                "blockNumber": 7453266,
                "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
                "transactionIndex": 0,
                "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
                "logIndex": 3,
                "removed": false,
                "id": "log_c62823b3",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x5d469d2b52ad2869c190670786404d49084b5a4fbc283f35510286534da7fd32"
                    ]
                }
            },
            "ProposalOpen": {
                "address": "0xA97f85715BE0db0050698F94d0fB4018540133Ce",
                "blockNumber": 7453266,
                "transactionHash": "0x116c337199a56c1979c72915a371bc9948d1217886dc97c1b29a785c50721b9d",
                "transactionIndex": 0,
                "blockHash": "0xdaa32e720567d3d6b9c5a0df0619d1af4d05d47afb1bf5d4c25436e35a5dd80c",
                "logIndex": 4,
                "removed": false,
                "id": "log_e9426ef4",
                "returnValues": {
                    "0": "1",
                    "proposalId": "1"
                },
                "event": "ProposalOpen",
                "signature": "0x22275e343a3f87b48eef0aaba66399e614dbddbcaf4c1b665863a05657d3429b",
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x22275e343a3f87b48eef0aaba66399e614dbddbcaf4c1b665863a05657d3429b"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1661195882490,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195883544,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195884602,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195885670,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195886724,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195887776,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195888832,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195889888,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195890944,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195891998,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195893057,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195894105,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195895156,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195896204,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195897260,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195898314,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195899371,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195900434,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195901486,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195902537,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195903591,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195904649,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195905700,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195906755,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195907809,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Waiting for vote to start"
    },
    {
        "level": 30,
        "time": 1661195954021,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x9ff23851021853e70083c877282b2468924d47eb82233342c8c3fca85c5ca5e6",
        "blockNumber": 7453268,
        "contractAddress": null,
        "cumulativeGasUsed": 137242,
        "effectiveGasPrice": 2500809144,
        "from": "0x6ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
        "gasUsed": 137242,
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000",
        "status": true,
        "to": "0xa97f85715be0db0050698f94d0fb4018540133ce",
        "transactionHash": "0x6f3a5622d021ee029b477504627972d852205c01676e60256c5e5a88d85bd906",
        "transactionIndex": 0,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xF4874B29C0Dc3D99dFd87F5A714d6b7BefF96C10",
                "blockNumber": 7453268,
                "transactionHash": "0x6f3a5622d021ee029b477504627972d852205c01676e60256c5e5a88d85bd906",
                "transactionIndex": 0,
                "blockHash": "0x9ff23851021853e70083c877282b2468924d47eb82233342c8c3fca85c5ca5e6",
                "logIndex": 0,
                "removed": false,
                "id": "log_6214a059",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000006ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x2acce567deca3aabf56327adbb4524bd5318936eaefa69e3a5208ffda0cfec09"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1661195955143,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195956198,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195957252,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195958303,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195959357,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195960412,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195961466,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195962520,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195963576,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195964626,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195965689,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195966743,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195967801,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195968855,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195969914,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195970975,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195972036,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195973095,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195974157,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195975211,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195976265,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195977321,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195978376,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195979433,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195980482,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195981537,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195982597,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195983656,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195984714,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195985767,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195986821,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195987873,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195988929,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195989993,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195991043,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195992098,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195993154,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195994208,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195995263,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195996313,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195997366,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195998425,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661195999479,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196000531,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196001595,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196002647,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196003704,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196004755,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196005806,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196006859,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196007911,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196008979,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196010036,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196011091,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196012145,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196013198,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196014255,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196015310,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196016361,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196017417,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196018469,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196019527,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196020584,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196021647,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196022711,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196023767,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196024827,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196025882,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196026936,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196027987,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196029043,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196030097,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196031147,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196032203,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196033254,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196034306,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196035377,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196036432,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196037491,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196038548,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196039605,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196040662,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196041718,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196042779,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196043832,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196044888,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196045942,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196046993,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196048045,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196049091,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196050141,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196051193,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196052245,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196053299,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196054351,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196055404,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196056451,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196057502,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196058558,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196059607,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196060662,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196061727,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196062775,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196063827,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196064889,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196065943,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196066995,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196068052,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196069106,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196070153,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196071208,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196072263,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196073326,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "Voting is in progress"
    },
    {
        "level": 30,
        "time": 1661196110370,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/governance.js",
        "blockHash": "0x55a600395cf04a8491b8b9560a31460815eba81e309cfeb1c3d3181e061b62d5",
        "blockNumber": 7453277,
        "contractAddress": null,
        "cumulativeGasUsed": 121124,
        "effectiveGasPrice": 2500836488,
        "from": "0x6ceb0bf1f28ca4165d5c0a04f61dc733987ed6ad",
        "gasUsed": 53191,
        "logsBloom": "0x00000000000000000000000000000000000000800000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000200000080000000000000000000000000",
        "status": true,
        "to": "0xa97f85715be0db0050698f94d0fb4018540133ce",
        "transactionHash": "0x021ec60e6a91ea48cbeac40dea5b4f703ee3c436386950787176a5f69ec934b6",
        "transactionIndex": 1,
        "type": "0x2",
        "events": {
            "0": {
                "address": "0xA97f85715BE0db0050698F94d0fB4018540133Ce",
                "blockNumber": 7453277,
                "transactionHash": "0x021ec60e6a91ea48cbeac40dea5b4f703ee3c436386950787176a5f69ec934b6",
                "transactionIndex": 1,
                "blockHash": "0x55a600395cf04a8491b8b9560a31460815eba81e309cfeb1c3d3181e061b62d5",
                "logIndex": 1,
                "removed": false,
                "id": "log_e032ea34",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0x887777ccf43690541bed9e00b10d0fccfa7520b11875f09847a57b3085d8ab92"
                    ]
                }
            },
            "VoteClosed": {
                "address": "0xA97f85715BE0db0050698F94d0fB4018540133Ce",
                "blockNumber": 7453277,
                "transactionHash": "0x021ec60e6a91ea48cbeac40dea5b4f703ee3c436386950787176a5f69ec934b6",
                "transactionIndex": 1,
                "blockHash": "0x55a600395cf04a8491b8b9560a31460815eba81e309cfeb1c3d3181e061b62d5",
                "logIndex": 0,
                "removed": false,
                "id": "log_5e5243dc",
                "returnValues": {
                    "0": "1",
                    "proposalId": "1"
                },
                "event": "VoteClosed",
                "signature": "0xbc12589e76c0d59fd5a7c6f642c154830f0b46718b5ac07d1a0bdf29e124cbd8",
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
                    "topics": [
                        "0xbc12589e76c0d59fd5a7c6f642c154830f0b46718b5ac07d1a0bdf29e124cbd8"
                    ]
                }
            }
        }
    },
    {
        "level": 30,
        "time": 1661196110440,
        "pid": 52385,
        "hostname": "080e1bc37852",
        "module": "/workspaces/collective_governance_js/dist/index.js",
        "msg": "The measure has passed"
    }
]
Done in 279.26s.
```
