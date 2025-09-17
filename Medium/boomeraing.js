function findBoomerangs(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        boomaring([nums[i], nums[j], nums[k]])
        
      }
    }
  }
  console.log(res);
}

findBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]);

function boomaring(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] == [nums[nums.length - 1]] &&
      nums[1] == nums[nums.length - 1] - nums[0]
    ) {
      console.log(
        "this numbers make an bommaring the first is is",
        nums[0],
        "the middle is ",
        nums[1],
        "the last is ",
        nums[2]
      );
      return nums;
    }
  }
}
