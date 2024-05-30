import CryptoJS from "crypto-js";

export function decryptAES(secretKey: string, data: string, iv: string) {
  const key = CryptoJS.SHA256(secretKey).toString()?.substring(0, 32);
  var decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
