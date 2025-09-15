const toggle = document.getElementById("toggleDropdown");
  const submenu = document.getElementById("submenu");

  toggle.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que salte al href
    submenu.classList.toggle("show");
  });

  // Cierra el menú si haces clic fuera
  window.addEventListener("click", function(event) {
    if (!toggle.contains(event.target) && !submenu.contains(event.target)) {
      submenu.classList.remove("show");
    }
  });

// Carrousel
  let currentSlide = 0;
  const slides = document.getElementById('slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  function showSlide(index) {
    currentSlide = (index >= totalSlides) ? 0 : index;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }

  // Auto-slide cada 6 segundos
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6000);

  document.addEventListener('DOMContentLoaded', function () {
  const valores = document.querySelectorAll('.valor');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // para que no se vuelva a animar
      }
    });
  }, {
    threshold: 0.3
  });

  valores.forEach(valor => {
    observer.observe(valor);
  });
});
