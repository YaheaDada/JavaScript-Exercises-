function sorting(arr) {
  console.log("the Given Array is ", arr);
  let sorted = arr;

  
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[i] < sorted[j]) {
        let temp;
        temp = sorted[j];
        sorted[j] = sorted[i];
        sorted[i] = temp;
      }
    }
  }
  console.log("the Sorted  Array is in ", sorted);
  console.log("arr ", arr);
  if (arr === sorted) {
    console.log("tru");
  }
}

sorting([10, 5, 65, 0, 8, 98]);
