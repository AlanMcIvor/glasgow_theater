// this script changed the background colour of teh header between black and transparent
// depending on the navs position on screen

const nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  // specifiy the beginning and end
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition >= 300) {
    nav.classList.add("header_coloured");
    nav.classList.remove("header_transparent");
  } else {
    nav.classList.add("header_transparent");
    nav.classList.remove("header_coloured");
  }
});
