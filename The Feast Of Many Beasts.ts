export function feast(beast: string, dish: string): boolean {
  const firstCharBeast = beast.substring(0, 1);
  const LastCharBeast = beast.substring(beast.length - 1, beast.length);
  const firstCharDish = dish.substring(0, 1);
  const LastCharDish = dish.substring(dish.length - 1, dish.length);

  if (firstCharBeast === firstCharDish && LastCharBeast === LastCharDish) {
    return true;
  } else {
    return false;
  }
}
