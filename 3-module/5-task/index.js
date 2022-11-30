function getMinMax(str) {
  // ваш код...

  let arrStr = str.split(' ');
  let newArray = arrStr.filter((c) => !isNaN(parseInt(c)));
  console.log(newArray);

  const arrNums = newArray.map(num => { return Number(num) });
  console.log(arrNums);

  return esult = { min: Math.min(...arrNums), max: Math.max(...arrNums) };

}
