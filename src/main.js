const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('068eed51a9219980aba81dbf4a08786c903f5c128918fe1f810d9c384c0d98a7')
const myWalletAddress = myKey.getPublic('hex')

// THIRD VIDEO
let savjeeCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
savjeeCoin.addTransaction(tx1)

console.log('\n Started the miner.')
savjeeCoin.minePendingTransactions(myWalletAddress)
console.log('\nBalance of xavier is ', savjeeCoin.getBalanceOfAddress(myWalletAddress))

console.log("Is chain valid?", savjeeCoin.isChainValid())

savjeeCoin.chain[1].transactions[0].amount = 1

console.log("Is chain valid?", savjeeCoin.isChainValid())
