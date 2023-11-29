const sha256 = require('crypto-js/sha256');

module.exports = class Block {
    constructor(index = 0, data = 'Genesis Block', prevhash = null) {
        this.index = index;
        this.data = data;
        this.timestamp = new Date();
        this.prevhash = prevhash;
        this.hash = this.generateHash();
    }

    generateHash() {
        return sha256(this.index + JSON.stringify(this.data) + this.prevhash + this.timestamp).toString();
    }
}