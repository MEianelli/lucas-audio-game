import { parseJSON } from "./json";

export default function api<T>(
  url: string,
  options: Record<string, string> = {}
): Promise<T> {
  return fetch(url, options).then(async (response) => {
    if (!response.ok) {
      const awaitedResponse = await response.text();
      throw new Error(`${awaitedResponse}`);
    }
    return parseJSON<T>(response) as Promise<T>;
  });
}
