function showAlert(){
    alert('Hola, esta es una alerta desde JavaScript');
}

// DESAFÍO DÍA 7:

// 1 - Seleccionamos el botón Menú 
// 2 - Le agregamos un listener para que detecte cuando lo clickeen.
// 3 - Cuando lo clickeen seleccionamos los navLinks.
// 4 - Le damos la clase nav-links-responsive a los navLinks".

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})