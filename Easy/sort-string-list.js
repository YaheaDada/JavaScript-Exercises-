// function sortStringList(strList) {
//   let item0 = strList[0];
//   let item1 = strList[1];
//   let item2 = strList[2];
//   let result = [];

//   for (let i = 0; i < strList.length; i++) {
//     let word = strList[i].length;
//     console.log("the word", strList[i], "length is", word);
//   }
//   for (let k = 0; k < strList.length; k++) {
//     //   0>1
//     if (item0.length > item1.length) {
//       result.push(swap(item0, item1));
//       // 1>0
//     } else if (item1.length > item0.length) {
//       result.push(swap(item1, item0));
//       // 1>2
//     } else if (item1.length > item2.length) {
//       result.push(swap(item1, item2));
//       // 2>1
//     } else if (item2.length > item1.length) {
//       result.push(swap(item2, item1));
//       // 0>2
//     } else if (item0.length > item2.length) {
//       result.push(swap(item0, item2));
//     }
//     //   2>0
//     else if (item2.length > item0.length) {
//       result.push(swap(item2, item0));
//     }
//   }
//   console.log(result);
// }
// sortStringList(["apple", "banana", "kiwi"]);

// function swap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   return a;
// }


function sortStringList(strList) {
  for (let i = 0; i < strList.length - 1; i++) {
    for (let j = 0; j < strList.length - i - 1; j++) {
      if (strList[j].length < strList[j + 1].length) {
        // Swap
        let temp = strList[j];
        strList[j] = strList[j + 1];
        strList[j + 1] = temp;
      }
    }
  }
  console.log(strList);
}

sortStringList(["apple", "banana", "kiwi"]);

// function sortStringList(strList) {
//   // Sort by length, longest first
//   strList.sort((a, b) => b.length - a.length);
//   console.log(strList);
// }

// sortStringList(["apple", "banana", "kiwi"]);