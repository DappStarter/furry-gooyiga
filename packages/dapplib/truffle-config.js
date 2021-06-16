require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid process orient venture stool response sadness coffee guess another army gesture'; 
let testAccounts = [
"0xdc55188f954ec9d530c09698d465d4d549db52610ba5f1031a35497daace0185",
"0x4bb6b18029d112b904948e12951b59ba0fc71b61062c686995f42884ef574a74",
"0x9506970c07906624753f38f9a7b1cda98e1a1cf3f52e4a66bdd80355ea815716",
"0xc8e266cd2a5a70ca89b8873fe706f22885b5c2732d7460a553e50eee97502a3c",
"0x0f5ec8c7c551ad18e94570a474c3932c4b57c0fb616345792a282683f7224c7f",
"0x3510aa7b8ef187fb4b151f4f20dd7f8a9455b2717e0aaef49ee5fdd67b2ccb73",
"0xdfdeea19b91de8a9689b080f19983f7290ed16036a5ddd9b3f151e8bb27dc944",
"0x73c0292bd0e114e9cfc2f24c813682b5e18be92cfb589ba9230726877fd9302e",
"0x79d0b674148648ba676f91b1d61892325565488a1608e205a10ec2e5074757cd",
"0x86f0556aebffc9d1eafc4e7f2dd326b5707d7ba04795ccb6a9c2e3040cae8151"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


