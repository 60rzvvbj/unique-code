import { getRandomStr as r, md5 } from "./utils";

const DefaultKey = "60rzvvbj";
const sep = ":";

export function createCode(key: string): string {
  let time = String(Date.now());
  let s = md5(key + time + DefaultKey);
  return `${r(7)}${sep}${time}${sep}${r(6)}${sep}${s}${sep}${r(5)}`;
}

export function checkCode(key: string, code: string): boolean {
  let arr = code.split(sep);
  if (arr.length !== 5) {
    return false;
  }
  if (arr[0].length !== 7 || arr[2].length !== 6 || arr[4].length !== 5) {
    return false;
  }
  let time = arr[1];
  let s = arr[3];
  if (s === md5(key + time + DefaultKey)) {
    return true;
  } else {
    return false;
  }
}
