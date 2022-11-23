function checkSpam(str) {
  // ваш код...
  if (!str) return false;

  str = str.toLowerCase().trim();

  return str.includes("xxx") || str.includes("1xbet");

}
