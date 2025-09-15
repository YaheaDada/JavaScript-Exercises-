function addEvenNumbers(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      res += i;
    //   console.log(i);
    }
  }
  console.log(res);
  return res;
}

addEvenNumbers(10);
