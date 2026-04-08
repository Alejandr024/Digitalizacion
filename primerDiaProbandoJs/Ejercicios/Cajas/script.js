function eventoClick(cajas) {
  cajas.style.color= "White";
  cajas.innerText = "Visça el Barca";
}
function eventoOver(cajas) {
  cajas.style.color= "Pink";
  cajas.innerText = "DayZ";
}
function eventoOut(cajas) {
  cajas.style.color = "Black";
  cajas.style.background = "lightBlue";
  cajas.innerText= "De web";
}
function eventoDown(cajas) {
  cajas.style.color= "White";
  cajas.innerText = "Torneo de futsal";  
}
function eventoUp(cajas) {
  cajas.style.color= "Blue";
  cajas.style.background= "orange";
  cajas.innerText = "Darle color a la pagina";
}
function eventoInput(input) {
  document.getElementById("resultado").textContent= input.value;
}

function eventoDouble(cajas) {
  cajas.style.color= "White";
  cajas.innerText = "Dar Instrucciones";
}

//document.getElement(seleciona)ById("nombreId")(el parrafo o lo que tenga el id).textConcent(lugar donde escribe el texto)= input.value(recoge lo que escribe el usuario);