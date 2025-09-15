const toggle = document.getElementById("toggleDropdown2");
const submenu = document.getElementById("submenu2");

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