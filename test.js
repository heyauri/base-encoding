const baseEncoding = require("./lib");

let str = "hello world1234567890a啊是阿"

let enc_b64 = baseEncoding.encode.base64(str);

console.log(enc_b64, baseEncoding.detect.detect(enc_b64));

let enc_b64_url = baseEncoding.encode.base64_url(str);

console.log(enc_b64_url, baseEncoding.detect.detect(enc_b64_url));