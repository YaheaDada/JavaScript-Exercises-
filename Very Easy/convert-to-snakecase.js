function convertToSnakeCase(str) {

  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      console.log(" there is space at ", i);
      res += "_";
    } else {
      res += str[i];
    }
  }
  console.log(res.toLowerCase());
  return res.toLowerCase();
}
