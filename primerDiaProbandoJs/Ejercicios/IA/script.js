function eventoClickParaQueSirve(cajas) {
  cajas.style.color= "black";
  cajas.innerText = "Su uso es cotidiano en el ambito de la programación, ya sea se desarrollo web o de software.";
  cajas.style.background= "lightBlue";
  cajas.style.fontFamily= "Roboto";
}

function eventoOutSituaciones(cajas) {
  cajas.style.color = "Black";
  cajas.style.background = "lightBlue";
  cajas.innerText= "Utilizado para automatizar tareas, mejorar la eficiencia, analizar datos, entre otras cosas.";
  cajas.style.fontFamily= "Roboto";
}

function eventoDoubleEjemplo(cajas) {
  cajas.style.color= "Black";
  cajas.innerText = "Que corrija un error de bucle infinito \"while\".";
  cajas.style.fontFamily= "Roboto";
  cajas.style.background= "lightBlue";
}

function eventoOverFuncionConcreta(cajas) {
  cajas.style.color= "Black";
  cajas.style.background= "lightgreen";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText = "En todos los casos, si no le dices ninguna indicación, Claude te responde con el código corregido, sin tu decirle nada.";
}

function eventoOut(cajas) {
  cajas.style.color = "Black";
  cajas.style.background = "lightBlue";
  cajas.innerText= "De web";
}

function eventoDownSinIa(cajas) {
  cajas.style.color= "Black";
  cajas.style.background= "lightGreen";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText = "Sin la IA, muchos problemas o aplicaciones tardarían más de ser resueltas o desarrolladas.";  
}

function eventoOutDatosIa(cajas) {
  cajas.style.color = "Black";
  cajas.style.background = "Orange";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Utiliza el historial de conversación de los usuario, y los envía a los servidores de Anthropic.";
}

function eventoClickDeDondeSonLosDatos(cajas) {
  cajas.style.color = "Black";
  cajas.style.background = "Orange";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Como se dijo anteriormente, los datos provienen del historial de conversación de los usuarios.";
}

function eventoDoubleDatosErroneos(cajas) {
  cajas.style.color= "Black";
  cajas.style.background = "Orange";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "En el caso de que se le pasen datos erróneos a Claude, este, al igual que otra IA, puede generar respuestas alucinadas, en otras palabras, respuestas, que pueden ser convincentes, pero son erroneas.";
}

function eventoOverVentajas(cajas) {
  cajas.style.color= "Black";
  cajas.style.background = "#DAB1DA";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Algunas de las ventajas de la AI puede ser: automatización de tareas, con el uso del \"vibe coding\", ahorro de tiempo a la hora de escribir código, entre otras cosas.";
}

function eventoDownBeneficioIa(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "#DAB1DA";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "El beneficio de la IA es, siempre y que nunca cambia, para las empresas, ya que con la IA, las empresas ahorran en sueldos de empleados, que pueden invertir en la IA, que les sale más barato.";
}

function eventoOverRiesgosIa(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "Pink";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Algún riesgo que tiene la IA puede ser el de generar errores en el código hecho por la IA, es decir, que el código generado tenga erroes, y que tú no sepas resolverlos.";
}

function eventoDownInfluencia(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "Pink";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Sí, por ejemplo, si se le da a una IA un texto con un sesgo, esta puede generar respuestas con ese mismo sesgo, y si el usuario no tiene conocimientos sobre ese tema, puede creer que esa respuesta es correcta, y dejarse influenciar por ella, en vez de investigar por su cuenta, y sacar sus propias conclusiones.";
}

function eventoDoubleRiesgosReales(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "Pink";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Un ejemplo puede ser: la creacion de una base de datos, al importarle un diseño con sus columnas y tablas, la IA puede generar el código sin tener en cuenta las columnas que le pases, es decir, se inventa otras columnas, y si el usuario no se da cuenta, puede llevar a que, al importar datos, pueda generar errores de importación, pues no coincidirián los datos con las columnas.";
}

function eventoOverOpinionPersonal(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "lightBlue";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Bajo mi punto de vista, el uso de Claude es uno de las mejores decisiones que he tomado, pues en muhcos casos, me ha ayudad a hacer mis trabajo y me los ha explicados, ya sea los erroes que he tenido como los conceptos que ha agregado yen qué me benefician.";
}

function eventoOutUtil(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "lightBlue";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Es útil siempre y cuando sepas usarlo y sepas lo que estes haciendo, es decir, debes saber programar o diseñar para utilizarlo y entender lo que hace, y encontrar errores que pueda tener, pues no todas las IA's son perfectas.";
}

function eventoClickConfianza(cajas){
  cajas.style.color= "Black";
  cajas.style.background = "lightBlue";
  cajas.style.fontFamily= "Roboto";
  cajas.innerText= "Actualmente, no confío en la IA, pues, como he dicho anteriormente, este puede tener erroes, otros más graves y otros pequeños, pero no quita que son erroes. Por eso, y hasta el día de hoy, no me fío del todo de la IA.";
}

function jugar(usuario) {

  let opciones = ["piedra", "papel", "tijeras"];
  let maquina = opciones[Math.floor(Math.random() * 3)];

  // Mostrar elección de la máquina
  document.getElementById("maquina").innerHTML = maquina;

  let resultado = "";

  if (usuario == maquina) {
    resultado = "Empate";
  } 
  else if ((usuario == "piedra" && maquina == "tijeras") || (usuario == "papel" && maquina == "piedra") || (usuario == "tijeras" && maquina == "papel")){
    resultado = "Victoria";
  } 
  else {
    resultado = "Derrota";
  }

  // Mostrar resultado
  document.getElementById("resultado").innerHTML = resultado;

  document.getElementById("resultado").innerHTML = resultado;

  // Seleccionamos el div con clase "juego"
  let idResultado = document.getElementById("resultado");

  if (resultado == "Victoria") {
    idResultado.style.backgroundColor = "lightgreen";
  } else if (resultado == "Derrota") {
    idResultado.style.backgroundColor = "lightcoral";
  } else {
    idResultado.style.backgroundColor = "lightyellow";
  }
}