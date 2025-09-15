function convertCurrency(sourceCurrency, targetCurrency, amount) {
  if (sourceCurrency.toString() == "USD") {
    // ! USD TO EUR AND INR
    if (targetCurrency.toString() == "EUR") {
      return USD_EUR(amount);
    } else if (targetCurrency.toString() == "INR") {
      return USD_INR(amount);
    }
    // !
  } else if (sourceCurrency.toString() == "EUR") {
    if (targetCurrency.toString() == "USD") {
      return EUR_USD(amount);
    } else if (targetCurrency.toString() == "INR") {
      return EUR_INR(amount);
    }
  } else if (sourceCurrency.toString() == "INR") {
    if (targetCurrency.toString() == "USD") {
      return INR_USD(amount);
    } else if (targetCurrency.toString() == "EUR") {
      return INR_EUR(amount);
    }
  }
}

// ! helper function
function USD_EUR(amount) {
  console.log(amount * 0.85);
  return amount * 0.85;
}
function USD_INR(amount) {
  console.log(amount * 74.83);
  return amount * 74.83;
}
//
function EUR_USD(amount) {
  console.log(amount * 1.18);
  return amount * 1.18;
}
function EUR_INR(amount) {
  console.log(amount * 88.5);
  return amount * 88.5;
}
//
function INR_USD(amount) {
  console.log(amount * 0.013);
  return amount * 0.013;
}
function INR_EUR(amount) {
  console.log(amount * 0.011);
  return amount * 0.011;
}

convertCurrency("USD", "EUR", 10);
