let n = parseInt(prompt("Introduce el número limite: "));

let arrPrimos= [];
let arrPalindromos = [];
let todo = [];

for(let i = 1; i<=n; i++){
   	 if(esPrimo(i)){
   		 arrPrimos.push(i);
	}
	if(esPalindromo(i)){
    	arrPalindromos.push(i);
	}
	if(esPrimo(i) && esPalindromo(i)){
   		 todo.push(i);
	}
}
console.log("Primos " + arrPrimos);
console.log("Palindromos " + arrPalindromos)
console.log("Primos y Palindromos " + todo)

function esPrimo(i){

if(i < 1) return false;
  for(let j = 2; j <= Math.sqrt(i); j++) {
	if(i % j === 0) return false;
  }
  return true;
}

function esPalindromo(i){
    let cadena = i.toString();
  let reverso = cadena.split('').reverse().join('');
 
  return cadena == reverso;
}