function establecerCookie() {
  document.cookie = "miCookie=miValor; SameSite=None; Secure";
}
function mostrarFormulario() {
  // Obtener la capa modal por su ID
  var modal = document.getElementById("miModal");

  // Mostrar la capa modal
  modal.style.display = "flex";
}

function mostrarFormulario2() {
  // Obtener la capa modal por su ID
  var modal = document.getElementById("miModal");
  var modal2 = document.getElementById("miModal2");

  // Mostrar la capa modal
  modal.style.display = "none";
  modal2.style.display = "flex";
}

function cerrarFormulario() {
  // Obtener la capa modal por su ID
  var modal = document.getElementById("miModal");

  // Ocultar la capa modal
  modal.style.display = "none";
}

function cerrarFormulario2() {
  // Obtener la capa modal por su ID
  var modal = document.getElementById("miModal2");

  // Ocultar la capa modal
  modal.style.display = "none";
}

// Función desplegable para el contenido de los cursos
function toggleModule(moduleId) {
  var moduleContent = document.getElementById(moduleId);
  var arrowDown = document.getElementById("arrowDown" + moduleId.slice(-2));
  var arrowUp = document.getElementById("arrowUp" + moduleId.slice(-2));

  // Cerrar todos los módulos excepto el seleccionado
  var allModuleContents = document.querySelectorAll('.module-content');
  allModuleContents.forEach(function (otherModule) {
    if (otherModule.id !== moduleId) {
      otherModule.style.maxHeight = "0";
      otherModule.style.border = "none";
      otherModule.classList.add("closing"); // Agrega la clase para cerrar sin animación

      // Ocultar arrowUp y mostrar arrowDown de los módulos cerrados
      var otherArrowDown = document.getElementById("arrowDown" + otherModule.id.slice(-2));
      var otherArrowUp = document.getElementById("arrowUp" + otherModule.id.slice(-2));
      otherArrowDown.style.display = "block";
      otherArrowUp.style.display = "none";
    }
  });

  if (moduleContent.style.maxHeight === "0px" || moduleContent.style.maxHeight === "") {
    moduleContent.style.maxHeight = "1000px"; // Ajusta esto según sea necesario
    moduleContent.classList.remove("closing"); // Elimina la clase de cerrar sin animación
    arrowDown.style.display = "none";
    moduleContent.style.border = "1px solid rgb(197, 195, 195)";
    arrowUp.style.display = "block";
  } else {
    moduleContent.style.maxHeight = "0";
    moduleContent.classList.add("closing"); // Agrega la clase para cerrar sin animación
    moduleContent.style.border = "none";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  }
}



// Función para los 3 desplegables generales
function toggleContent(contentId, angleUpId, angleDownId) {
  var content = document.getElementById(contentId);
  var button = content.previousElementSibling;
  var angleUp = document.getElementById(angleUpId);
  var angleDown = document.getElementById(angleDownId);

  button.classList.toggle('active');

  if (button.classList.contains('active')) {
    content.style.maxHeight = 'none';
    angleUp.style.display = 'block';
    angleDown.style.display = 'none';
  } else {
    content.style.maxHeight = '0';
    angleUp.style.display = 'none';
    angleDown.style.display = 'block';
  }
}

