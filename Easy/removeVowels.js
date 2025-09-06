function removeVowels(str) {
  let novowels = "";

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
      console.log(novowels);
    }
  }
}

removeVowels("Orange juice");

// ! mister said that its more usefuall to divide the proplem into smaller picess
