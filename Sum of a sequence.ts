const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let x = begin; x <= end; x = x + step) {
    sum = sum + x;
  }
  return sum;
};
