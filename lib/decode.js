const decode = {
    base16: (str) => {
        return Buffer.from(str, "hex").toString();
    },
    base64: (str) => {
        return Buffer.from(str, "base64").toString();
    },
    base64_url: (str) => {
        return Buffer.from(str.replace("-", "+").replace("_", "/"), "base64").toString();
    },
};

module.exports = decode;
