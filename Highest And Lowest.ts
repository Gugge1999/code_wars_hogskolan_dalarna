export class Kata {
  static highAndLow(numbers: string): string {
    const inputNumbersArr = numbers.split(' ').map((item) => parseInt(item));

    const highestNum = Math.max(...inputNumbersArr);

    const lowestNum = Math.min(...inputNumbersArr);

    return `${highestNum} ${lowestNum}`;
  }
}
