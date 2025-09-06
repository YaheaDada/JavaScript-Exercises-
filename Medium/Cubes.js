function pileUpCubes(cubes) {
  let iscubed = false;
  for (let i = 0; i < cubes.length; i++) {
    if (cubes[i] < cubes[i + 1]) {
    //   console.log("No because ", cubes[i], ">", cubes[i + 1]);
    iscubed = false;
    console.log("exited");
    return "No"

    } else {
      console.log("yes");
      iscubed = true;
    }
  }
  console.log(iscubed);
  
  if (iscubed == true) {
    return "Yes";
  } else {
    return "No";
  }
}

pileUpCubes([5, 4, 3, 4, 1]);
