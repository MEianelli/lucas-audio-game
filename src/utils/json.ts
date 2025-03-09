export const parseJSON = <T>(response: Response) => {
  return response.text().then(function (text) {
    return text ? (JSON.parse(text) as T) : undefined;
  });
};

export function JSONParse(data: unknown) {
  if (!data || typeof data !== "string") return {};
  try {
    return JSON.parse(data);
  } catch (e: unknown) {
    console.log("e :", e);
    return {};
  }
}
