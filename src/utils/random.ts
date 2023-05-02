const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function getRandomStr(len: number) {
  let res = "";
  for (let i = 0; i < len; i++) {
    res += str[parseInt(String(Math.random() * str.length))];
  }
  return res;
}
