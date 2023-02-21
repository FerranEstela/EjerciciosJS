const numeros = [];

llenarArray(numeros);
mostrar(numeros);

function llenarArray(numeros){
    let n;
 
  do{
      n = parseInt(prompt("Introduce un número: "))
	if(n>=1 && !Number.isNaN(n)){
   	 numeros.push(n);
	}
  } while (n>=1 && !Number.isNaN(n))
 
  return n;
}

function mostrar(numeros){
    let suma = 0, mayor = numeros[0], menor = numeros[0];
 
  console.log("Lista de números introducidos " + numeros);
  console.log("Numero pares: " + par(numeros));
  console.log("Numero impares: " + impar(numeros));
 
  for(let i = 0; i<numeros.length;i++){
      suma += numeros[i];
	if(numeros[i] > mayor){
   	 mayor = numeros[i];
	}
	if(numeros[i] < menor){
   	 menor = numeros[i];
	}
  }
 
  console.log("Suma total: " + suma);
  console.log("Media: " + suma/numeros.length)
  console.log("Mayor: " + mayor);
  console.log("Menor: " + menor);
}

function par(numeros){
    let par = 0;
 
  for(let i= 0; i<numeros.length;i++){
      if(numeros[i] % 2 == 0){
   	 par++;
	}
  }
  return par;
}

function impar(numeros){
    let impar = 0;
 
  for(let i= 0; i<numeros.length;i++){
      if(numeros[i] % 2 != 0){
   	 impar++;
	}
  }
  return impar;
}