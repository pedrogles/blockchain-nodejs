const Blockchain = require("./Blockchain")

const blockchain = new Blockchain();

blockchain.addBlock({from: 'a', to: 'b', amount: 1})
blockchain.addBlock({from: 'a', to: 'b', amount: 2})

console.log(blockchain);