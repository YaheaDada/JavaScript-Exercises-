
function name(arrayMark,arrayMark,arrayMark) {




  let marks = arrayMark
  let totalAidNeeded = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 60) {
      totalAidNeeded += 60 - marks[i];
    }
  }




  if (totalAidNeeded === 0) {
    return console.log("success")
  } else if (totalAidNeeded <= 2) {
    return console.log("Success with Aid");
  } else {
    return console.log("Fail");
  }
}



console.log

name([60 , 59, 60 , 100,60],[60 , 59, 60 , 100,60],[60 , 59, 60 , 100,60])




