// https://app.programiz.pro/community-challenges/challenge/javascript-next-largest-number/info

function nextLargestNumber(n) {
  let str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  console.log(arr);
  BubbleSort(arr);
  console.log(arr);
  let res = arr.join("");
  let finalResult = Number(res);
  console.log(finalResult, " and the n is", n);
  if (finalResult > n) {
    return finalResult;
  }else{
    return -1
  }
}


function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

nextLargestNumber(1234);