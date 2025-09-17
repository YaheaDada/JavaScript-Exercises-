// https://app.programiz.pro/community-challenges/challenge/javascript-extending-string/info
function extendString(str) {
  let res = str;
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  console.log(res);
  return res;
}
extendString("Hello");
