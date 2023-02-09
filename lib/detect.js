const detect = {
    base16: (str) => {
        return /^[0-9A-F]+$/.test(str);
    },
    base32: (str) => {
        return /^[A-Z2-7]+={0,6}$/.test(str);
    },
    base64: (str) => {
        return /^[0-9A-Za-z\+\/]+={0,2}$/.test(str);
    },
    base62: (str) => {
        return /^[0-9A-Za-z]+$/.test(str);
    },
    base64_url: (str) => {
        return /^[0-9A-Za-z-_]+={0,2}$/.test(str);
    },
};

module.exports = {
    ...detect,
    detect: (str) => {
        return Object.keys(detect).reduce((prev, curr) => {
            prev[curr] = detect[curr](str);
            return prev;
        }, {});
    },
};
