let slides = document.querySelectorAll(".carousel img");
let current = 0;

function toggleInfo(title) {
  const service = title.parentElement;
  service.classList.toggle("active");
}


setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 2000);

