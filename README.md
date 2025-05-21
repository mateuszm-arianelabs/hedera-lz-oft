# Layer Zero (OFT) usage with Hedera

This repo contains a test setup for bridging a FT from Hedera to another EVM chain (Avalanche Fuji) using LayerZero’s OFT.
Contracts are in `contracts/`, deploy scripts in `deploy/`, and token send/mint scripts in `tasks/`.

## Run locally
1. Install dependencies `pnpm install`
2. Create `.env` file and set `PRIVATE_KEY`
3. Compile contracts `pnpm run compile:hardhat`
4. Deploy contracts `npx hardhat lz:deploy` (select hedera testnet, and avalanche testnet)
5. Wire (set peers) `npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts`

After this configuration, the contracts are ready for token transfers. Before initiating a transfer, make sure to mint some tokens on the chain you intend to send them from.

## Interaction with contracts

⚠️ For testing purposes, it's recommended to use the same recipient as the one associated with the private key in your config (provide it as an EVM address).


__Mint tokens on Avalanche Fuji__
```bash
npx hardhat oft:mint --network avalanche-testnet --amount 100 --to 0x4c003D0E477B7b6c950912AD1DD0DB6E253522d1
```

__Mint tokens on Hedera testnet__
```bash
npx hardhat oft:mint --network hedera-testnet --amount 100 --to 0x4c003D0E477B7b6c950912AD1DD0DB6E253522d1
```

__Send tokens from Avalanche Fuji -> Hedera Testnet__
```bash
npx hardhat oft:sendFromFuji --network avalanche-testnet --amount <AMOUNT> --to <RECEIVER>
```

__Send tokens from Hedera Testnet -> Avalanche Fuji__
```bash
npx hardhat oft:sendFromHedera --network hedera-testnet --amount <AMOUNT> --to <RECEIVER>
```

## Example transactions
- [Avalanche Fuji -> Hedera Testnet](https://testnet.layerzeroscan.com/tx/0x5058b4ac7f3f987bde0206032f53e60b914b3519180336650af440915e65e145)
- [Hedera Testnet -> Avalanche Fuji](https://testnet.layerzeroscan.com/tx/0xf10314bc56b0c94425a5648f759b8d88b97e55f53151dbb9a7b1544fdadfa8dc)
