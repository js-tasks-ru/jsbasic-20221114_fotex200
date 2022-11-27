function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let key in salaries) {
    const salaryValue = salaries[key];
    if (typeof salaryValue == 'number' && isFinite(salaryValue)) {
      sum += salaryValue;
    }
  }
  return sum;
}
