const form = document.querySelector(".intro__form");
const input = document.querySelector(".intro__input");

input.addEventListener("focus", function () {
  form.classList.add("intro__form--active");
});

input.addEventListener("blur", function () {
  form.classList.remove("intro__form--active");
});