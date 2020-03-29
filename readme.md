# Mine on Transaction Only
I am going to create a private Blockchain with hyperledger besu using IBFT2 consensus algorithm. That mine while transaction only!

## In Order To Achieve This

I will set the block sealing period to 0 in genesis file. So it will mine on transactions only. Unfortunatly this could cause the Blockchain to be slow. To solve this problem I will make my blockchain with 0 gas cost.

The Gensis file is on network/gensis.json all I need to do is to set `"blockperiodseconds": 0`

Then To set the gas price to zero you need to follow this link:
https://besu.hyperledger.org/en/stable/HowTo/Configure/FreeGas/

## Installation

install dependencies: 

```sh
npm install
```

Compile Contracts:

```sh
truffle compile
```
## Run Network

```sh
cd network
```

You need to run each command on a node (If you don't understand this step check this link https://besu.hyperledger.org/en/stable/Tutorials/Private-Network/Create-IBFT-Network/)


```sh
cd node-1
besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --min-gas-price=0 --host-whitelist="*" --rpc-http-cors-origins="all"
```
Atfer running this command you will get a Enode URL copy it and add to the other nodes.
```sh
cd node-2
besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Enode URL>  --min-gas-price=0 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-whitelist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546
```

```sh
cd node-3
besu --data-path=data --genesis-file=../genesis.json  --bootnodes=<Enode URL>    --min-gas-price=0 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-whitelist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547

```

```sh
cd node-4
besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Enode URL>   --min-gas-price=0 --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-whitelist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548
```

## Run DAPP

Import private key to your metamask account from `truffle-config.js`
Then migrate truffle and run the Dapp
```sh
truffle migrate --network besuWallet
npm run dev
```
