function eventoClick(caja) {
  caja.innerText = "Click hecho"; // Cambia el texto de la caja al hacer click
}
function eventoOver(caja) {
  caja.style.color = "Green"; // Cambia el color del texto a verde al pasar el mouse por encima
}
function eventoOut(caja) {
  caja.style.background = "Red"; // Cambia el color de fondo a rojo al quitar el mouse de la caja
}
function eventoDown(caja) {
  caja.innerText = "Hola mundo"; // Cambia el texto de la caja al hacer click y mantenerlo presionado
}
function eventoUp(caja) {
  caja.innerText = "Adios mundo"; // Cambia el texto de la caja al soltar el click después de haberlo mantenido presionado
}
function eventoInput(input) {
  console.log(input.value); // Mostar input en consola en vez de mostralo en el front o en la pagina
  // input.nextElementSibling.textContent = "Texto: " + input.value; Mostrar el input escrito en tiempo real, se escribe "texto" parsa que no desaparezca del front al escribir el input.
}

function eventoDouble(caja) {
  caja.innerText = "Haz hecho doble click, muy bien."; // Cambia el texto de la caja al hacer doble click
}