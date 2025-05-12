// script.js

// Agregar un listener para verificar si todos los enlaces de navegación funcionan correctamente.
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Evitar comportamiento por defecto si es necesario (para navegación dinámica)
      // event.preventDefault();

      // Mostrar un mensaje en la consola para verificar el enlace clickeado
      console.log(`Navegando a: ${link.getAttribute("href")}`);
    });
  });
});
