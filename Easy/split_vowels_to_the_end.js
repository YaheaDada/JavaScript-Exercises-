function splitvowels(str) {
  let novowels = "";
  let vowels = "";
  splitted = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] != "a" &&
      str[i] != "e" &&
      str[i] != "i" &&
      str[i] != "o" &&
      str[i] != "u" &&
      str[i] != "O" &&
      str[i] != "A" &&
      str[i] != "I" &&
      str[i] != "E" &&
      str[i] != "U"
    ) {
      novowels += str[i];
    } else {
      vowels += str[i];
    }
  }

  console.log(novowels+vowels);
}

splitvowels("Orange juice");

// ! mister said that its more usefuall to divide the proplem into smaller picess
