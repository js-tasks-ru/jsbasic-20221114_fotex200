function checkSpam(str) {
  // ваш код...
  str = str.toLowerCase().trim();

  if (str.includes("xxx") || str.includes("1xbet")) {
    return true;
  }
  return false;
}
