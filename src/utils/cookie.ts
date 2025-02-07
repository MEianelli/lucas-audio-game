import { decryptData, encryptData } from "./crypto";

export function getCookieValueByName(param: string = "d187yd") {
  if (typeof window === "undefined") return "";
  if (!document) return "";
  const match = document.cookie.match(new RegExp("(^| )" + param + "=([^;]+)"));
  return match ? match[2] : "";
}

export function setCookie(value: string, param: string = "d187yd") {
  if (typeof window === "undefined") return;
  if (!document) return;
  if (value) {
    document.cookie = `${param}=${value}; expires=Fri, 31 Dec 2050 23:59:59 GMT; path=/; SameSite=Lax;`;
  }
}

export function deleteCookie(param: string = "d187yd") {
  if (typeof window === "undefined") return;
  if (!document) return;
  document.cookie = `${param}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}

export function setCryptoCookie(data?: Record<string, string>) {
  if (!data) {
    setCookie("");
  } else {
    const dataString = JSON.stringify(data);
    const encryptedData = encryptData(dataString);
    setCookie(encryptedData);
  }
}

export function getCryptoCookie() {
  const data = getCookieValueByName();
  if (!data) return data;
  const decryptedData = decryptData(data);
  return JSON.parse(decryptedData);
}
