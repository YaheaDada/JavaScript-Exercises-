function censorWord(sentence, word) {
  // Step 1: Build censored version of the word manually
  let cenword = "";
  for (let i = 0; i < word.length; i++) {
    cenword += "*";
  }

  let result = "";
  let i = 0;

  while (i < sentence.length) {
    // Check if current character matches the first letter of the word
    if (sentence[i] === word[0]) {
      // Check if the whole word matches at position i
      let match = true;
      for (let j = 0; j < word.length; j++) {
        if (i + j >= sentence.length || sentence[i + j] !== word[j]) {
          match = false;
          break;
        }
      }

      // If word matches, check boundaries (space or start/end)
      if (match) {
        let atStart = i === 0;
        let atEnd = i + word.length === sentence.length;
        let beforeIsSpace = sentence[i - 1] === " ";
        let afterIsSpace = sentence[i + word.length] === " ";

        let leftOk = atStart || beforeIsSpace;
        let rightOk = atEnd || afterIsSpace;

        if (leftOk && rightOk) {
          result += cenword;
          i += word.length; // skip past the censored word
          continue;
        }
      }
    }

    // No match or not a full word → just add current characterc
    result += sentence[i];
    i++;
  }

  return result;
}

console.log(censorWord("the cat sat on the mat", "cat"));
