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

  if (moduleContent.style.maxHeight === "0px" || moduleContent.style.maxHeight === "") {
    moduleContent.style.maxHeight = moduleContent.scrollHeight + "px";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  } else {
    moduleContent.style.maxHeight = "0";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  }
}
