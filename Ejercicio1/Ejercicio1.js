var texto = prompt("Introduce un texto: ");
var patron = ["AA","BCA","RBT","JT"];

let n = encontrarPatron(texto, patron);
let total = totalPatrones(texto, patron);

console.log("Aparece: " + n + " veces")
console.log("Aparecen: " + total + " veces")

function encontrarPatron(texto, patron){
    let contador = 0, pos;
 
  texto = texto.trim().toUpperCase();
  pos = texto.indexOf(patron[0]);
 
  while(pos != -1){
  contador++;
  pos = texto.indexOf(patron[0], pos + 1);
  }
 
  return contador;
}

function totalPatrones(texto, patron){
  let contador = 0, pos;
 
  texto = texto.trim().toUpperCase();
  for(let i= 0; i<patron.length;i++){
      pos = texto.indexOf(patron[i].toUpperCase());
    
	while(pos != -1){
     	 contador++;
     	 pos = texto.indexOf(patron[i], pos + 1);
      }
  }

  return contador;
}
