const pow = (num,pow) => {
  if (pow == 0) {
    return;
  } else {
    let res = num * pow(num, pow - 1);
    console.log(res);
    return num * pow(num, pow);
  }
}

pow(2, 3);
