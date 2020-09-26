const media = window.matchMedia("screen and (max-width: 767px)");

const menu = document.querySelector('.menu')
// console.log("menu");
const burgerButtom = document.querySelector("#burger-menu");
// console.log("burgerButtom");

media.addListener(validation)

function validation(event) {
  if (event.matches) {
     console.log(event.matches);
     burgerButtom.addEventListener("click", show)
  }
  else {
     console.log("no activado");
     burgerButtom.removeEventListener("click", show)
  }
}
validation(media);

function show() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove('is-active');
  }
  else {
    menu.classList.add('is-active');
  }
}
