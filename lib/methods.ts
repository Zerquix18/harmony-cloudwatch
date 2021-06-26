import { RCP } from '../models';

// https://api.hmny.io/ has these

const MAINNET_S0 = 'rpc.s0.t.hmny.io';
const MAINNET_S1 = 'rpc.s1.t.hmny.io';
// const MAINNET_S2 = 'rpc.s2.t.hmny.io';
// const MAINNET_S3 = 'rpc.s3.t.hmny.io';

const methods: RCP[] = [
  /********************** Smart Contract ********************************/
  {
    host: MAINNET_S0,
    name: 'hmyv2_call',
    params: [
      { to: '0x08AE1abFE01aEA60a47663bCe0794eCCD5763c19' },
      370000
    ],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_estimateGas',
    params: [
      { to: '0x08AE1abFE01aEA60a47663bCe0794eCCD5763c19' },
    ],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getCode',
    params: [
      '0x08AE1abFE01aEA60a47663bCe0794eCCD5763c19',
      370000
    ],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStorageAt',
    params: [
      "0x295a70b2de5e3953354a6a8344e616ed314d7251",
      "0x0",
      370000
    ],
    result: 'string',
  },

  /********************** Staking ********************************/
  /************** Delegation *******************/


  {
    host: MAINNET_S0,
    name: 'hmyv2_getDelegationsByDelegator',
    params: [
      "one1t593eqff9h2cjxz2k7d6q4cg4zmmgtm9veeyd9",
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getDelegationsByDelegatorByBlockNumber',
    params: [
      "one1t593eqff9h2cjxz2k7d6q4cg4zmmgtm9veeyd9",
      3700000,
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getDelegationsByValidator',
    params: [
      "one1qk7mp94ydftmq4ag8xn6y80876vc28q7s9kpp7",
    ],
    result: 'object',
  },

  /************** Validator *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getAllValidatorAddresses',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getAllValidatorInformation',
    params: [0],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getAllValidatorInformationByBlockNumber',
    params: [
      -1,
      3700000
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getElectedValidatorAddresses',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getValidatorInformation',
    params: [
      "one1vfglvsfuk52025r5apqlfaqky37462tsdjeemf"
    ],
    result: 'object',
  },

  /************** Network *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getCurrentUtilityMetrics',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getMedianRawStakeSnapshot',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingNetworkInfo',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getSuperCommittees',
    params: [],
    result: 'object',
  },

  /********************** Transaction ********************************/
  /************** Cross Shard *******************/

  {
    host: MAINNET_S1,
    name: 'hmyv2_getCXReceiptByHash',
    params: [
      '0xd324cc57280411dfac5a7ec2987d0b83e25e27a3d5bb5d3531262387331d692b'
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getPendingCXReceipts',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_resendCx',
    params: [
      "0xd324cc57280411dfac5a7ec2987d0b83e25e27a3d5bb5d3531262387331d692b"
    ],
    result: 'boolean',
  },

  /************** Transaction Pool *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getPoolStats',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_pendingStakingTransactions',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_pendingTransactions',
    params: [],
    result: 'object',
  },

  /************** Staking *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getCurrentStakingErrorSink',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingTransactionByBlockNumberAndIndex',
    params: [
      5601505,
      0
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingTransactionByBlockHashAndIndex',
    params: [
      "0x1e81ce2e75d670e8c523a7a4fd12179638896e4ff496e24f69e2f075f79a28f6",
      0
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingTransactionByHash',
    params: [
      "0x097e58ef5e0a59cac1ca8653793659c9bb69599cb032867c035cdc9cd071483e",
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_sendRawStakingTransaction',
    params: [
      "0xDEADBEEF",
    ],
    result: 'string',
  },

  /************** Transfer *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getCurrentTransactionErrorSink',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionByBlockHashAndIndex',
    params: [
      "0x77ef489dce6deee69374aa878a67a9cf1f653ec4f7b697bbeed2931669f6be77",
      0
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionByBlockNumberAndIndex',
    params: [
      3687181,
      0
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionByHash',
    params: [
      "0x41d6e74ff3a7e615080b98fcfb7bce8be7b1ba4a8671e1ba2e9527eb3e1da20d"
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionReceipt',
    params: [
      "0xd324cc57280411dfac5a7ec2987d0b83e25e27a3d5bb5d3531262387331d692b"
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_sendRawTransaction',
    params: [
      "0xDEADBEEF"
    ],
    result: 'string',
  },

  /********************** Blockchain ********************************/
  /************** Network *******************/
  
  {
    host: MAINNET_S0,
    name: 'hmyv2_blockNumber',
    params: [],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getCirculatingSupply',
    params: [],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getEpoch',
    params: [],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getLastCrossLinks',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getLeader',
    params: [],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getShardingStructure',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTotalSupply',
    params: [],
    result: 'string',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getValidators',
    params: [
      1
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getValidatorKeys',
    params: [
      1
    ],
    result: 'object',
  },

  /************** Node *******************/
  
  // this one is WIP and failed my curl requests
  {
    host: MAINNET_S0,
    name: 'hmyv2_getCurrentBadBlocks',
    params: [],
    result: 'string', // this is a guess!
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getNodeMetadata',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_protocolVersion',
    params: [],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'net_peerCount',
    params: [],
    result: 'string',
  },

  /************** Blocks *******************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlocks',
    params: [
      1,
      2, 
      {
        withSigners: false, 
        fullTx: false,
        inclStaking: false
      }
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockByNumber',
    params: [
      1,
      {
        fullTx: true,
        inclTx: true,
        InclStaking: true
      }
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockByHash',
    params: [
      "0x61ce03ef5efa374b0d0d527ea38c3d13cb05cf765a4f898e91a5de1f6b224cdd",
      {
        fullTx: true,
        inclTx: true,
        InclStaking: true
      }
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockSigners',
    params: [
      1
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockSignerKeys', // original documentation says hmyv2_getBlockSignersKeys
    params: [
      1
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockTransactionCountByNumber',
    params: [
      1
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBlockTransactionCountByHash',
    params: [
      "0x61ce03ef5efa374b0d0d527ea38c3d13cb05cf765a4f898e91a5de1f6b224cdd"
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getHeaderByNumber',
    params: [
      1
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getLatestChainHeaders',
    params: [],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_latestHeader',
    params: [],
    result: 'object',
  },

  /********************** Account ********************************/

  {
    host: MAINNET_S0,
    name: 'hmyv2_getBalance',
    params: [
      "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt"
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getBalanceByBlockNumber',
    params: [
      "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
      1
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingTransactionsCount',
    params: [
      "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
      "SENT"
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getStakingTransactionsHistory',
    params: [
      {
        address: "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
        pageIndex: 0,
        pageSize: 1,
        fullTx: true,
        txType: "ALL",
        order: "ASC"
      }
    ],
    result: 'object',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionsCount',
    params: [
      "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
      "SENT"
    ],
    result: 'number',
  },
  {
    host: MAINNET_S0,
    name: 'hmyv2_getTransactionsHistory',
    params: [
      {
        address: "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
        pageIndex: 0,
        pageSize: 1,
        fullTx: true,
        txType: "ALL",
        order: "ASC"
      }
    ],
    result: 'object',
  },
];

export default methods;
