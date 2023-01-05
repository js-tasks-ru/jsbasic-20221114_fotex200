function makeFriendsList(friends) {
  // ваш код...

  const ul = document.createElement('ul');//retun type HTML

  const template = friends
    .map((friend) => {
      return `
      <li>${friend.firstName} ${friend.lastName}</li>
      `})
    .join('');

  ul.innerHTML = template;

  // document.body.append(ul);
  return ul;
}
