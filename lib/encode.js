const decode = {
    base16: (str) => {
        return Buffer.from(str).toString("hex");
    },
    base64: (str) => {
        return Buffer.from(str).toString("base64");
    },
    base64_url: (str) => {
        return Buffer.from(str).toString("base64").replace("+", "-").replace("/", "_");
    },
};

module.exports = decode;
