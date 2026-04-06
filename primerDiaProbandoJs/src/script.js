function eventoClick(caja) {
  caja.innerText = "Click hecho";
}
function eventoOver(caja) {
  caja.style.color = "Green";
}
function eventoOut(caja) {
  caja.style.background = "Red";
}
function eventoDown(caja) {
  caja.innerText = "Hola mundo";
}
function eventoUp(caja) {
  caja.innerText = "Adios mundo";
}
function eventoInput(input) {
  console.log(input.value); // Mostar input en consola en vez de mostralo en el front o en la pagina
  // input.nextElementSibling.textContent = "Texto: " + input.value; Mostrar el input escrito en tiempo real, se escribe "texto" parsa que no desaparezca del front al escribir el input.
}

function eventoDouble(caja) {
  caja.innerText = "Haz hecho doble click, muy bien.";
}