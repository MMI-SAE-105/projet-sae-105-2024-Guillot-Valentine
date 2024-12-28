const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__btn--prev");
const nextButton = document.querySelector(".carousel__btn--next");

if (carousel) {

  prevButton.addEventListener("click", (evt) => {
    carousel.scrollBy({ left: -190, behavior: "smooth" });
  });

  nextButton.addEventListener("click", (evt) => {
    carousel.scrollBy({ left: +190, behavior: "smooth" });
  });
}