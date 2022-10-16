export class Kata {
  static getCount(str: string) {
    const vowels = str.match(/[aeiou]/gi)?.join('');

    return vowels?.length ?? 0;
  }
}
