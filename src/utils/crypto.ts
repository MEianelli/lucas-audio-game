import CryptoJS from "crypto-js";

export function crypto(data: Record<string, string>) {
  const json = JSON.stringify(data);
  return CryptoJS.SHA256(json).toString();
}
