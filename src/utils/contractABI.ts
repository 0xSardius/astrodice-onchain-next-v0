export const contractABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "approved",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CreatedAstrodice",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "planet",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "sign",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "house",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "planetSymbol",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "signSymbol",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createAstrodiceNFT",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "houses",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "listOfAstrodiceReadings",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "planet",
        internalType: "string",
      },
      {
        type: "string",
        name: "sign",
        internalType: "string",
      },
      {
        type: "string",
        name: "house",
        internalType: "string",
      },
      {
        type: "string",
        name: "planetSymbol",
        internalType: "string",
      },
      {
        type: "string",
        name: "signSymbol",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerToAstrodiceCollection",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "planet",
        internalType: "string",
      },
      {
        type: "string",
        name: "sign",
        internalType: "string",
      },
      {
        type: "string",
        name: "house",
        internalType: "string",
      },
      {
        type: "string",
        name: "planetSymbol",
        internalType: "string",
      },
      {
        type: "string",
        name: "signSymbol",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "planetSymbols",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "planets",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "signSymbols",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "signs",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenCounter",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenIdToAstrodice",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "planet",
        internalType: "string",
      },
      {
        type: "string",
        name: "sign",
        internalType: "string",
      },
      {
        type: "string",
        name: "house",
        internalType: "string",
      },
      {
        type: "string",
        name: "planetSymbol",
        internalType: "string",
      },
      {
        type: "string",
        name: "signSymbol",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
