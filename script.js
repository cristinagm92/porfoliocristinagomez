document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const mensaje = document.getElementById("mensaje-exito");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Simula envío
      mensaje.style.display = "block";
  
      // Limpia el formulario
      form.reset();
  
      // Oculta el mensaje después de 5 segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 5000);
    });
  });