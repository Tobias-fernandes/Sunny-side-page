const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".container-header");
const contentHeader = document.querySelector(".content-header");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  contentHeader.classList.toggle("active");
});

document.addEventListener("mousedown", (event) => {
  if (!nav.contains(event.target)) {
    nav.classList.remove("active");
    contentHeader.classList.remove("active");
  }
});
