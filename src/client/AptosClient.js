const aptosWeb3 = require('@martiandao/aptos-web3-bip44.js');
const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
const FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
const api = new aptosWeb3.WalletClient(NODE_URL, FAUCET_URL);
export default api;