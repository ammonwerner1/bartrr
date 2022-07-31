export const create2ABI = `[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "Deployed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "code",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "deploy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`