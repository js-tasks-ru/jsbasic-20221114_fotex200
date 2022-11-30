function showSalary(users, age) {
  // ваш код...
  let result = [];
  for (let user of users) {
    if (user.age <= age) {
      result.push(`${user.name}, ${user.balance}`);
    }
  }
  return result.join('\n');
}
