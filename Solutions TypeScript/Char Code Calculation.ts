export const calc = (str: string): number => {
  const asciChars = [
    { character: 'A', code: 65 },
    { character: 'B', code: 66 },
    { character: 'C', code: 67 },
    { character: 'D', code: 68 },
    { character: 'E', code: 69 },
    { character: 'F', code: 70 },
    { character: 'G', code: 71 },
    { character: 'H', code: 72 },
    { character: 'I', code: 73 },
    { character: 'J', code: 74 },
    { character: 'K', code: 75 },
    { character: 'L', code: 76 },
    { character: 'M', code: 77 },
    { character: 'N', code: 78 },
    { character: 'O', code: 79 },
    { character: 'P', code: 80 },
    { character: 'Q', code: 81 },
    { character: 'R', code: 82 },
    { character: 'S', code: 83 },
    { character: 'T', code: 84 },
    { character: 'U', code: 85 },
    { character: 'V', code: 86 },
    { character: 'W', code: 87 },
    { character: 'X', code: 88 },
    { character: 'Y', code: 89 },
    { character: 'Z', code: 90 },
  ];

  let total1: string = '';

  const inputArr = str.split('');

  for (let i = 0; i < inputArr.length; i++) {
    const inputChar = inputArr[i];

    const matchingAsciChar = asciChars.find(
      (item) => item.character == inputChar
    );

    total1 = total1.concat(matchingAsciChar?.code.toString() ?? '');
  }

  const total2 = total1.replace(/7/g, '1');

  const difference = parseInt(total1) - parseInt(total2);

  return difference;
};
