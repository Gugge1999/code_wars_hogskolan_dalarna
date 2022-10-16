export function positiveSum(arr: number[]): number {
  return arr
    .filter((item) => item > 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
