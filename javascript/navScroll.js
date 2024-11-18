const nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition >= 500) {
    nav.classList.add("header_coloured");
    nav.classList.remove("header_transparent");
  } else {
    nav.classList.add("header_transparent");
    nav.classList.remove("header_coloured");
  }
});
