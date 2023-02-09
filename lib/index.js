const detect = require("./detect");
const decode = require("./decode");
const encode = require("./encode");

let baseEncoding = {
    detect,
    decode,
    encode
};

module.exports = baseEncoding;
