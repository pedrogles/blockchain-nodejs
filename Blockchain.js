const Block = require("./Block");

module.exports = class Blockchain {
    constructor() {
        this.blocks = [ new Block() ]; //Initializing with genesis block
        this.nextIndex = 1;
    }

    getPrevHash() {
        return this.blocks[this.blocks.length - 1].hash;
    }

    addBlock(data) {
        const lastHash = this.getPrevHash(); //Getting the last hash
        const block = new Block(this.nextIndex, JSON.stringify(data) ,lastHash);
        this.blocks.push(block);

        this.nextIndex++; 
    }
}