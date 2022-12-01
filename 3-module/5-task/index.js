function getMinMax(str) {
  // ваш код...

  const arrNums = str.split(' ')
    .filter((c) => !isNaN(parseInt(c)))
    .map(num => Number(num));

  return { min: Math.min(...arrNums), max: Math.max(...arrNums) };
}
