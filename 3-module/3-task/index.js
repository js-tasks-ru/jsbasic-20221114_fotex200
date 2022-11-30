function camelize(str) {
  // ваш код...
  let camelCase = '';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '-') {
      camelCase += str.substring(i + 1, i + 2).toUpperCase();
      i++;
    } else {
      camelCase += str.charAt(i);
    }
  }
  return camelCase;
}
