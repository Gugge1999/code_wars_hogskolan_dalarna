export const squareArea = (num: number): number => {
  const circumference = num * 4;

  const radius = circumference / (2 * Math.PI);

  return radius * radius;
};
