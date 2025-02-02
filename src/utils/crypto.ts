import CryptoJS from "crypto-js";

export function crypto(data: Record<string, string>) {
  const json = JSON.stringify(data);
  return CryptoJS.SHA256(json).toString();
}

export const encrypt = (text: string) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

export const decrypt = (data: string) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};

export const encryptData = (text: string) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(text),
    "K8kuFzU1BT72SHZfl9VUNA=="
  ).toString();
};

export const decryptData = (text: unknown) => {
  if (!text || typeof text !== "string") return {};
  const bytes = CryptoJS.AES.decrypt(text, "K8kuFzU1BT72SHZfl9VUNA==");
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
