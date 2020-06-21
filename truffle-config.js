require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach rival ranch purity hard light army gift'; 
let testAccounts = [
"0xe58dd760e6682d042f5173d8143110526a12f9e2a31272d15920594a9026f637",
"0x4b0df5183d2ecc0cd5fbb3e18b001d760881e8777c5881e48d16c8558fddaa0d",
"0x991927ffca984c3e140299f894794cc02b4901f36bfac1bb512378e14cd21bcf",
"0x2667f7fb2816e571d5ccdf5073ad85ddf6ad352fb45172f4fc44a68ea7a1a5dc",
"0xca55e2f0c9e397b9789393bc24d4fd45c45ba3bbcca87413d484685389b240bc",
"0x0881fab7ca8a9c962f370fc007895ffc74026f780e53cb54ac8ca15f77735cd9",
"0xd986bbeb47de2bf9207e16fa23063727fe15c35e601021f72cd6b352668b4962",
"0xd9fd4ba3b62f57d78e7db018eb1682974c766571aea34e98e18ef6a2c4e0a3d3",
"0xd4e65a6e2dd4ac582e17e75115ec83a2f41cf57626c0d5d0b211d0c89ca1c07c",
"0x247b19824166843f64064088a012caa88f5ba0dc6d4a7e3f11b6899d7dbd4cfa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
