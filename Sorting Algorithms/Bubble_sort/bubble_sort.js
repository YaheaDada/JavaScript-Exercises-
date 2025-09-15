// in the bubble sort we are bubbling Two elements and comparing them then we repeat it and loop over each item in the array until its fixed
//$  Complexity : O(n.pow 2)

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(BubbleSort([1, 8, 7, 9, 10, 85]));
