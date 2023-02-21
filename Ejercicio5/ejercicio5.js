class Carta{
    constructor(numero, palo){
      this.numero = numero;
	this.palo = palo;
  }
 
  getNumero(){
      return this.numero;
  }
	 setNumero(numero){
      this.numero = numero;
  }
 
  getPalo(){
   return this.palo;
  }
  setPalo(palo){
      this.palo = palo;
  }
 
  mostrarCarta(){
      console.log(this.numero + " de " + this.palo);
  }
 
  esMenorQue(Carta){
      if(this.palo === Carta.palo){
   	 return this.numero < Carta.numero;
	} else {
   	 
  	const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
  	const miPalo = palos.indexOf(this.palo);
  	const otroPalo = palos.indexOf(Carta.palo);
  	return miPalo < otroPalo;
      }
  }
}

class Baraja{
constructor() {
	const palos = ['oros', 'copas', 'espadas', 'bastos']
    
	this.cartas = palos
  	.map((palo) => {
    	let cartas = []
    	for (let i = 1; i <= 12; i++) {
      	cartas.push(new Carta(i, palo))
    	}
    	return cartas
  	})
  	.flat()
	this.victorias = 0
	this.derrotas = 0
  }
 
  mostrarBaraja(){
  console.log(this.cartas);
  }
 
  barajar(){
      const intercambios = 20;
    
	for(let i=0; i<intercambios;i++){
   	 let Valor1 = Math.floor(Math.random() * this.cartas.length)
  	let Valor2 = Math.floor(Math.random() * this.cartas.length)
		 let aux = this.cartas[Valor1];
  	this.cartas[Valor1] = this.cartas[Valor2];
  	this.cartas[Valor2] = aux;
 	 
	}
  }
 
  jugar(){
      let numeroAleatorio = Math.floor(Math.random() * this.cartas.length);
	let cartaAleatoria = this.cartas[numeroAleatorio];
    
	let cartaJugador = parseInt(prompt("Elige una carta (1-48): " ));
	let carta = this.cartas[cartaJugador - 1];
    
	console.log("Carta del ordenador: ")
	cartaAleatoria.mostrarCarta();
	console.log("Carta del jugador: ");
	carta.mostrarCarta();
    
	if(carta.esMenorQue(cartaAleatoria)){
   	 console.log("Has perdido");
  	this.derrotas++;
	} else {
   	 console.log("Has ganado")
  	this.victorias++;
	}
    
	console.log("Victorias: " + this.victorias + " Derrotas: " + this.derrotas);
    
	const OtraVez = prompt("Quieres jugar otra vez (s/n)?");
   	 if(OtraVez === 's'){
 		 this.jugar();
  	}
  }
}
function main(){
    let miBaraja = new Baraja();
	 miBaraja.mostrarBaraja();
	 miBaraja.barajar();
	 miBaraja.mostrarBaraja();
	 miBaraja.jugar();
}
main();