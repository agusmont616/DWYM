function duplicates(nums) {
  const conteo = {};
  for (const num of nums) {
    conteo[num] = (conteo[num] || 0) + 1;
  }
  console.log(Object.values(conteo).filter((c) => c > 1).length);
}

const nums = [1, 2, 2, 3, 3, 4, 4, 4, 4];

duplicates(nums); // 3 