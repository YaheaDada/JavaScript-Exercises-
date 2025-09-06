  function moveZerosToEnd(arr) {
    let nonZero = [];
    let flag = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZero.push(arr[i]);
      } else {
        flag++;
      }
    }
    for (let i = 0; i < flag; i++) {
      nonZero.push(0);
    }
    console.log(nonZero);
    console.log(flag);
    return nonZero;
  }

  moveZerosToEnd([0, 11,1, 0, 3, 12, 0, 0, 0, 5]);
