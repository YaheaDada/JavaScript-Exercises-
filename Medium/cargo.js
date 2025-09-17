// https://app.programiz.pro/community-challenges/challenge/javascript-does-cargo-fit/info
function doesCargoFit(boxVolume, cargoLength, cargoWidth, cargoHeight) {
  let cargoVolume = cargoHeight * cargoLength * cargoWidth;
  if (boxVolume >= cargoVolume) {
    return "true";
  } else {
    return "false";
  }
}
// v = l*w*h
