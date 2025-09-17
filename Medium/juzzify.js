// https://app.programiz.pro/community-challenges/challenge/javascript-jazzify-every-chord/info
function jazzify(chords) {
  for (let i = 0; i < chords.length; i++) {
    chords[i]+="7";
  }
  return(chords);
  
}

jazzify(["G", "F", "C"]);
