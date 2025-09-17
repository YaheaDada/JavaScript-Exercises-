// https://app.programiz.pro/community-challenges/challenge/javascript-replace-old-with-new/info

function replaceAll(str, oldChar, newChar) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === oldChar) {
      res += newChar;
    } else {
      res += str[i];
    }
  }
  console.log(res);
  return res;
}

replaceAll("helloWorld", "o", "b");
