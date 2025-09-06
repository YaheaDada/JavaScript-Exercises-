function hideCreditCard(cardNumber) {
  let result = cardNumber.toString();

  let hiddenPart = "************";
  let visiblePart = result.slice(12); 

  let maskedCard = hiddenPart + visiblePart;

  console.log(maskedCard);
  return maskedCard;
}

hideCreditCard(1234567891234568); 