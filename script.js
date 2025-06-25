document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const mensajeInput = document.getElementById("mensaje");
  const formMessageDiv = document.getElementById("formMessage");

  // Elementos para mostrar errores individuales
  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");
  const errorMensaje = document.getElementById("errorMensaje");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Resetea los mensajes de error y el mensaje general del formulario
    resetErrors();
    formMessageDiv.textContent = "";
    formMessageDiv.className = "form-feedback"; // Limpia clases previas

    let isValid = true;
    let errorMessage = "";

    // Validación del nombre
    if (nombreInput.value.trim() === "") {
      isValid = false;
      errorNombre.textContent = "El nombre es obligatorio.";
      errorNombre.style.display = "block";
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      isValid = false;
      errorEmail.textContent = "El email es obligatorio.";
      errorEmail.style.display = "block";
    } else if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      errorEmail.textContent = "Por favor, introduce un email válido.";
      errorEmail.style.display = "block";
    }

    // Validación del mensaje
    if (mensajeInput.value.trim() === "") {
      isValid = false;
      errorMensaje.textContent = "El mensaje es obligatorio.";
      errorMensaje.style.display = "block";
    }

    if (isValid) {
      // Si todos los datos son correctos
      const nombreUsuario = nombreInput.value.trim();
      formMessageDiv.textContent = `¡Gracias por tu contacto, ${nombreUsuario}! En breve te estaré respondiendo.`;
      formMessageDiv.classList.add("success");
      form.reset(); // Limpia el formulario
    } else {
      // Si hay errores en los datos
      formMessageDiv.textContent =
        "Por favor, corrige los errores en el formulario.";
      formMessageDiv.classList.add("error");
    }
  });

  // Función para resetear los mensajes de error
  function resetErrors() {
    errorNombre.textContent = "";
    errorNombre.style.display = "none";
    errorEmail.textContent = "";
    errorEmail.style.display = "none";
    errorMensaje.textContent = "";
    errorMensaje.style.display = "none";
  }
});
