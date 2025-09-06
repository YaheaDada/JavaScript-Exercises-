//! for the terminal
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkStudentStatus(math, physics, programming, arabic) {
  //! array of


  let marks = [math, physics, programming, arabic];
  let totalAidNeeded = 0;


  for (let i = 0; i < 4; i++) {
    if (marks[i] < 60) {
      totalAidNeeded += 60 - marks[i];
      console.log()
    }
  }

  if (totalAidNeeded === 0) {
    return "Success";
  } else if (totalAidNeeded <= 2) {
    return "Success (with aid)";
  } else {
    return "Failed";
  }
}

//! asks the user to type something in the terminal.

rl.question("Enter Math mark: ", (math) => {
  rl.question("Enter Physics mark: ", (physics) => {
    rl.question("Enter Programming mark: ", (programming) => {
      rl.question("Enter Arabic mark: ", (arabic) => {
        const result = checkStudentStatus(
          parseInt(math),
          parseInt(physics),
          parseInt(programming),
          parseInt(arabic)
        );
        console.log("\nResult: " + result);
        rl.close();
      });
    });
  });
});
