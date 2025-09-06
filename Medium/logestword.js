function findLongestWord(sentence) {
  // ! second TRY

  let firstWord = 0;
  while (sentence[firstWord] != " ") {
    console.log(sentence[firstWord]);
    firstWord++;
  }
  console.log("first word is ", firstWord);
  for (let index = firstWord + 1; index < sentence.length; index++) {
    console.log(sentence[index]);
    if (sentence[index] == " ") {
      console.log("word ended after ", index - firstWord - 1);
    }
  }
}
findLongestWord("the quick ");

//! the working
function findLongestWord(sentence) {
  let word = [];
  let currentWord = "";
  // ! idk too much variables to know
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (sentence[i] !== " ") {
      currentWord += char;
    } else {
      if (currentWord !== "") {
        word.push(currentWord);
        currentWord = "";
      }
    }
  }
  // ! idk
  if (currentWord !== "") {
    word.push(currentWord);
  }
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}
