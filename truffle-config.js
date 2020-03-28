require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKey = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";
const privateKeyProvider = new HDWalletProvider(privateKey, "http://localhost:8545")
module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
        },
        ganache: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`
                )
            },
            gas: 0x1ffffffffffffe,
            gasPrice: 0,
            network_id: 3
        },
        besuWallet: {
            provider: privateKeyProvider,
            network_id: "*"
          }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}