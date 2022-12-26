function initCarousel() {
  // ваш код...

  const leftBtn = document.querySelector(".carousel__arrow_left");
  leftBtn.addEventListener("click", clickLeft);
  leftBtn.style.display = "none";

  const rightBtn = document.querySelector(".carousel__arrow_right");
  rightBtn.addEventListener("click", clickRight);

}

function offsetStep() {
  const carousel = document.querySelector(".carousel__inner");
  const step_offset = Number(carousel.dataset.stepOffset);
  return isNaN(step_offset) ? 0 : step_offset;
}

function clickLeft() {
  visibleButton(offsetStep() + 1);
}

function clickRight() {
  visibleButton(offsetStep() - 1);
}

function visibleButton(step_offset) {
  const carousel = document.querySelector(".carousel__inner");
  const size_offset = document.querySelector(".carousel__img").width;

  let rightBtn = document.querySelector(".carousel__arrow_right");
  let leftBtn = document.querySelector(".carousel__arrow_left");

  rightBtn.style.display = step_offset > -3 ? "" : "none";
  leftBtn.style.display = step_offset < 0 ? "" : "none";

  carousel.style.transform = `translateX(${step_offset * size_offset}px)`;
  carousel.dataset.stepOffset = step_offset;
}
