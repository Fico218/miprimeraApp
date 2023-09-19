import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'app-empleado',
templateUrl: './empleado.component.html',
 // template:"<p>Aquí iría un empleado👌👌👌</p>",
styleUrls: ['./empleado.component.css']
 // styles:["p{ background-color: red;}"]

})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Diaz";

  edad=18;

  // empresa="Píldoras Informáticas";

  /* getEdad(){

    return this.edad;
  } */

  habilitacionCuadro=true; 

  usuRegistrado=false; 

  textoDeRegistro="No hay nadie registrado";


  getRegistroUsuario(){

    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event:Event){

    // alert ("El usuario se acaba de registrar");

    // this.textoDeRegistro="El usuario se acaba de registrar"; 

    if((<HTMLInputElement>event.target).value=="Sí"){
      this.textoDeRegistro="El usuario se acaba de registrar"; 
    }else{
      this. textoDeRegistro="No hay nadie registrado";
    }

  }

  

  constructor() { }

  ngOnInit(): void {

  }

}
