function toggleText() {
  // ваш код...
  const button = document.querySelector('.toggle-text-button');

  button.addEventListener('click', function () {

    text.hidden = !text.hidden;
  });

}
