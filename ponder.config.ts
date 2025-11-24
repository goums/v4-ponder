import { createConfig } from "ponder";

import { PoolManagerAbi } from "./abis/PoolManager";

export default createConfig({
	ordering: "experimental_isolated",
	chains: {
		mainnet: {
			id: 1,
			rpc: process.env.PONDER_RPC_URL_1,
		},
		unichain: {
			id: 130,
			rpc: process.env.PONDER_RPC_URL_130,
		},
		optimism: {
			id: 10,
			rpc: process.env.PONDER_RPC_URL_10,
		},
		base: {
			id: 8453,
			rpc: process.env.PONDER_RPC_URL_8453,
		},
		arbitrum: {
			id: 42161,
			rpc: process.env.PONDER_RPC_URL_42161,
		},

		// Testnets
		ethereum_sepolia: {
			id: 11155111,
			rpc: process.env.PONDER_RPC_URL_11155111,
		},
		base_sepolia: {
			id: 84532,
			rpc: process.env.PONDER_RPC_URL_84532,
		},
		arbitrum_sepolia: {
			id: 421614,
			rpc: process.env.PONDER_RPC_URL_421614,
		},
	},
	contracts: {
		PoolManager: {
			chain: {
				mainnet: {
					address: "0x000000000004444c5dc75cb358380d2e3de08a90",
					startBlock: 21_700_000,
					endBlock: 22_500_000,
				},
				unichain: {
					address: "0x1f98400000000000000000000000000000000004",
					startBlock: 0,
					endBlock: 15_500_000,
				},
				arbitrum: {
					address: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
					startBlock: 297_842_872,
					endBlock: 320_000_000,
				},
				optimism: {
					address: "0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",
					startBlock: 131_000_000,
					endBlock: 136_000_000,
				},
				base: {
					address: "0x498581ff718922c3f8e6a244956af099b2652b2b",
					startBlock: 25_500_000,
					endBlock: 28_500_000,
				},

				// Testnets
				ethereum_sepolia: {
					address: "0xE03A1074c86CFeDd5C142C4F04F1a1536e203543",
					startBlock: 7_258_946,
					endBlock: 9_500_000,
				},
				base_sepolia: {
					address: "0x05E73354cFDd6745C338b50BcFDfA3Aa6fA03408",
					startBlock: 19_088_197,
					endBlock: 20_500_000,
				},
				arbitrum_sepolia: {
					address: "0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317",
					startBlock: 10_590_922,
					endBlock: 15_500_000,
				},
			},
			abi: PoolManagerAbi,
		},
	},
});
