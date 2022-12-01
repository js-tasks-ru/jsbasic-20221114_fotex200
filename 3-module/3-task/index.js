function camelize(str) {
  // ваш код...
  // let camelCase = '';
  // for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) == '-') {
  //     camelCase += str.substring(i + 1, i + 2).toUpperCase();
  //     i++;
  //   } else {
  //     camelCase += str.charAt(i);
  //   }
  // }
  // return camelCase;

  return str.split('-')
    .map((word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
