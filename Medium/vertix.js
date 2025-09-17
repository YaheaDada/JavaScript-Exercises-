// https://app.programiz.pro/community-challenges/challenge/javascript-quadratic-vertex/info
function findVertex(a, b, c) {
  let h = -b / (2 * a);
  let D = b * b - 4 * a * c;
  k = (-1 * D) / (4 * a);
  console.log([h, k]);

  return [h, k];
}

findVertex(3, -6, 1);
