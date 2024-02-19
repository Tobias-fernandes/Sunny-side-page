const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".container-header");
const contentHeader = document.querySelector(".content-header");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
    contentHeader.classList.toggle("active");
});

// Using JQuery


