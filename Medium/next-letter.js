function getNextLetter(char) {
  if (char == "z") {
    return String.fromCharCode(122);
  } else {
    let i = char.charCodeAt(0);
    return String.fromCharCode(i + 1);
  }
}
console.log(getNextLetter("z"));
