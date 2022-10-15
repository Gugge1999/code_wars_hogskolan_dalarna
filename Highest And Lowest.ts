export class Kata {
  static highAndLow(numbers: string): string {
    let highestNum = 0;
    let lowestNum = 0;

    const inputNumberArr = numbers.split(' ').map((item) => parseInt(item));

    highestNum = Math.max(...inputNumberArr);

    lowestNum = Math.min(...inputNumberArr);

    console.log(highestNum);
    console.log(lowestNum);

    return `${highestNum} ${lowestNum}`;
  }
}
