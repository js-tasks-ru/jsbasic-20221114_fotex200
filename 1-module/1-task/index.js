function factorial(n) {
  // ваш код...
  let result = 1;

  while (n >= 1) {
    result *= n;
    n--;
  }
  return result;
}
