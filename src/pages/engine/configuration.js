
/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "0x8efdc0791463c898a60b543d4800937023a1ad3d9046cc885806ebed5092b4ce";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0x6E7aD7BC0Bf749c87F59E8995c158cDa08b7E657";  // private key 

/*
Global Configurations
*/

/*
Ethereum Goerli Testnet
*/ 
// contract address
export var goeErc20 = "";   // USDC copy contract address
export var goeCustody = "0xfC6622d60e7aAD17e568b7C4bc6a3B0c62D13359";
export var goeNFT = "0x1dC5731f857b8F700f425919BAf6F2c7400E6502";
export var goerpc = "https://goerli.infura.io/v3/6901203b4a50478dbf2b96754aa9b681";

/*
Canto Testnet
*/
// export var canroErc20 = "";
// export var canroCustody = "";
// export var canroNFT = "";
// export var canrorpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Canto Mainnet
*/
export var cantoErc20 = "";    
export var cantoCustody = "0x134cAB7DAc9B844B141134BFb2e635F6f10dD368";
export var cantoNFT = "0x84bdE0f5063790770788cb8f4AE8bdA8D315aCf6";
export var cantorpc = "https://eth.plexnode.wtf/";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

