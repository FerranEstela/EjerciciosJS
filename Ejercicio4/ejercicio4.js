class Autobus {

    constructor(capacidad, pasajeros, matricula,listadoConductores){
     	 this.capacidad = capacidad;
  	this.pasajeros = pasajeros;
  	this.matricula = matricula;
  	this.listadoConductores = listadoConductores;
  }
 
  getCapacidad(){
      return this.capacidad;
  }
  setCapacidad(capacidad){
      this.capacidad = capacidad;
  }
 
  getPasajeros(){
      return this.pasajeros;
  }
  setPasajeros(pasajeros){
      this.pasajeros = pasajeros;
  }
 
  getMatricula(){
      return this.matricula;
  }
  setMatricula(matricula){
      this.matricula = matricula;
  }
 
  getListadoConductores(){
      return this.listadoConductores;
  }
  setlistadoConductores(listadoConductores){
      this.listadoConductores = listadoConductores;
  }
 
  mostrarDatosAutobus(){
      console.log("Capacidad: " + this.capacidad);
	console.log("Pasajeros: " + this.pasajeros);
	console.log("Matricula: " + this.matricula);
	console.log("Listado de conductores: " + this.listadoConductores)
  }
 
  subirPasajeros(numPasajeros){
      if(numPasajeros>(this.capacidad - this.pasajeros)){
   	 alert("No se pueden subir más pasajeros");
  	return;
	}
      this.pasajeros += numPasajeros;
  }
 
  bajarPasajeros(numPasajeros){
      if(numPasajeros > this.pasajeros){
   	 alert("No se pueden bajar más pasajeros.")
   	 return;
	}
      this.pasajeros -= numPasajeros;
  }
 
  buscarConductor(licencia){
      let conductores = this.listadoConductores;
    
	for(let i = 0; i<conductores.length; i++){
   	 if(conductores[i].includes(licencia)){
 		 return true;
  	}
	}
    
	return false;
  }
}

class conductor{
    constructor(nombre, licencia){
      this.nombre = nombre;
	this.licencia = licencia;
  }
 
  getNombre(){
      return this.nombre;
  }
  setNombre(nombre){
      this.nombre = nombre;
  }
 
  getLicencia(){
      return this.licencia;
  }
  setLicencia(licencia){
      this.licencia = licencia;
  }
 
  mostrarDatosConductor(){
  console.log("Nombre: " + this.nombre);
  console.log("Licencia: " + this.licencia);
  }
}

function main(){
    let autobus = new Autobus(50, 25, '8359AAA', ['2343','6574', '9087']);
  let Conductor = new conductor('Paco', '9087');
 
  autobus.mostrarDatosAutobus();
  Conductor.mostrarDatosConductor();
 
  autobus.subirPasajeros(25);
  autobus.mostrarDatosAutobus();
 
  autobus.bajarPasajeros(40);
  autobus.mostrarDatosAutobus();
 
  console.log(autobus.buscarConductor(Conductor.licencia));
/*Para que salga un false*/
  console.log(autobus.buscarConductor('6543'));
}

main();