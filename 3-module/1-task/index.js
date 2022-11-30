function namify(users) {
  // ваш код...
  let result = [];

  for (let item of users) {
    //let qqq = users.find(item => item.name);
    let qqq = users.map(item => item.name)
    result.push(item.name);
  };
  return result;
}
