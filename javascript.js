const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function autoSlide() {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
}

setInterval(autoSlide, 5000);


const contenidoNav = document.querySelector(".menu-list");
const icon = document.querySelector(".hamburguesa");

icon.addEventListener('click', () => {
  if (contenidoNav.classList.contains("menu-list")) {
    setTimeout(() => contenidoNav.classList.remove("menu-list"), 0);
  } else {
    contenidoNav.classList.add("menu-list");
  }
});
