function ucFirst(str) {
  // ваш код...

  // if (str === undefined || str === null || str === '') return '';  old code

  if (!str) {
    return '';
  }

  return str[0].toUpperCase() + str.substring(1);
}
