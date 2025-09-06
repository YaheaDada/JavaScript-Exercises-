function doubleCharacterSwap(str, c1, c2) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c1.toString()) {
      res += swap(c1, c2);
    } else if (str[i] == c2.toString()) {
      res += swap(c2, c1);
    } else {
      res += str[i];
    }
  }
  console.log("result is ", res);
  return res;
}

doubleCharacterSwap("hello", "h", "o");

function swap(a, b) {
  //   console.log("a=", a, "b=", b);
  let temp = "";
  temp = a;
  a = b;
  b = temp;
  //   console.log("a=", a, "b=", b);
  return a;
}

// swap('A','B');
// ! Done 50 XP