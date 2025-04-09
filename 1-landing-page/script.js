// Volver arriba
document.querySelector("footer a").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Validación básica del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensaje enviado (simulado) 😎");
  this.reset();
});
