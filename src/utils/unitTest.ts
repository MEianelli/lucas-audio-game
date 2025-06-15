export function test1(n: number) {
  return ((n & 0x0f) << 4) | ((n & 0xf0) >> 4);
}

export function test2(n: number) {
  return (n ^ 0x5a) + 0x17;
}

export function test3(n: number) {
  const golden = 1.618;
  return ~Math.round(n * golden) & 0xff;
}

export function test4(n: number) {
  return ((n << 3) | (n >> 5)) & 0xff;
}

export function test5(n: number) {
  const specialMap = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let encoded = "";

  const digits = n.toString().split("");
  if (digits.length === 0) digits.push("0");

  digits.forEach((digit) => {
    encoded += specialMap[parseInt(digit) % specialMap.length];
  });

  for (let i = 0; i < 10; i++) {
    encoded += specialMap[Math.floor(Math.random() * specialMap.length)];
  }

  return encoded;
}

export function detach1(n: number) {
  return ((n & 0x0f) << 4) | ((n & 0xf0) >> 4);
}

export function detach2(n: number) {
  return (n - 0x17) ^ 0x5a;
}

export function detach3(n: number) {
  const golden = 1.618;
  return Math.round((~n & 0xff) / golden);
}

export function detach4(n: number) {
  return ((n >> 3) | (n << 5)) & 0xff;
}

export function rampage(str: string) {
  const specialMap = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let numberStr = "";
  for (let i = 0; i < Math.min(3, str.length); i++) {
    const char = str[i];
    const index = specialMap.indexOf(char);
    if (index !== -1) {
      numberStr += index % 10;
    }
  }

  if (numberStr === "") return 0;
  return parseInt(numberStr);
}
