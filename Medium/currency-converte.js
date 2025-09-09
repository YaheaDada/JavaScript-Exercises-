function convertCurrency(sourceCurrency, targetCurrency, amount) {
  //   switch (amount) {
  //     case sourceCurrency.toString() == "USD" &&
  //       sourceCurrency.toString() == "EUR":
  //       return USD_EUR(amount);

  //       break;
  //     case y:
  //       // code block
  //       break;
  //     default:
  //     // code block
  //   }

  if (sourceCurrency.toString() == "USD") {
    if (targetCurrency.toString() == "EUR") {
      return USD_EUR(amount);
    } else if (targetCurrency.toString() == "INR") {
      USD_INR(amount);
    }
    // !
  } else if (sourceCurrency.toString() == "EUR") {
    if (targetCurrency.toString() == "EUR") {
      return USD_EUR(amount);
    } else if (targetCurrency.toString() == "INR") {
      USD_INR(amount);
    }
  }
}

// ! helper function
function USD_EUR(amount) {
  return amount * 0.85;
}
function USD_INR(amount) {
  return amount * 74.83;
}
function EUR_USD(amount) {
  return amount * 1.18;
}
function EUR_INR(amount) {
  return amount * 88.5;
}
function INR_USD(amount) {
  return amount * 0.013;
}
function INR_EUR(amount) {
  return amount * 0.011;
}
