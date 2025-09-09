function checkComposite(num) {
  let isComposite = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(i);
      isComposite = true;
      return "Composite";
    } else {
      isComposite = false;
    }
  }

  if (isComposite) {
    console.log("Composite");
    return "Composite";
  } else {
    console.log("Not Composite");
    return "Not Composite";
  }
}
checkComposite(15);

//! the link to the proplem
// ? MEDIEUM
// https://app.programiz.pro/community-challenges/challenge/javascript-composite-numbers/info
