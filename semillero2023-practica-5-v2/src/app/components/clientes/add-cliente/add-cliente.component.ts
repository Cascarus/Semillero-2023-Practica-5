import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit{

  cliente:any;
  direcciones:any = [];

  tablaDirecciones = false;
  
  tempDireccion:any;
  oldDireccion:any = {};

  listTipo:any =  [
    {id: "i", tipo:"Inhabilitado"},
    {id: "a", tipo:"Activo"},
  ];

  constructor(private clientesServices:ClientesService){}

  ngOnInit(): void {
    this.cliente = {
      nombre: "",
      apellido: "",
      nit: "",
      dpi:"",
      estado:"a",
      grabacionUsuario:this.getUsr()
    }

    this.tempDireccion = {
      direccion: "",
      estado:"",
      grabacionUsuario:""
    };
  }

  getUsr(){
    return "quemado";
  }

  crearRegistro(){
    this.cliente.direccionesList = this.direcciones;
    console.log(this.cliente);
    this.clientesServices.agregarClientes(this.cliente).subscribe(
      err=> console.log(err)
    );
    alert("el usuario se ha creado exitosamente");
  }

  limpiarTempDireccion(){
    this.tempDireccion = {
      direccion: "",
      estado:"",
      grabacionUsuario:""
    };
  }

  guardarDireccion(){
    this.tempDireccion.estado = "a";
    this.tempDireccion.grabacionUsuario = this.getUsr();
    this.direcciones.push(this.tempDireccion);
    this.limpiarTempDireccion();
  }

  guardarModificacionDireccion(){
    this.limpiarTempDireccion();
  }

  editarDireccion(item:any){
    this.tempDireccion = item;

    this.oldDireccion.direccion = item.direccion;
    this.oldDireccion.estado = item.estado;
    this.oldDireccion.grabacionFecha = item.grabacionFecha;
    this.oldDireccion.grabacionUsuario = item.grabacionUsuario;
    this.oldDireccion.modificacionFecha = item.modificacionFecha;
    this.oldDireccion.modificacionUsuario = item.modificacionUsuario;
  }

  eliminarDireccion(item:any){
    this.direcciones.pop(item);
  }

  cancelarCambioDireccion(){
    this.direcciones.forEach(element => {
      if(element.direccion == this.tempDireccion.direccion){
        element.direccion = this.oldDireccion.direccion;
        element.estado = this.oldDireccion.estado;
        element.grabacionFecha = this.oldDireccion.grabacionFecha;
        element.grabacionUsuario = this.oldDireccion.grabacionUsuario;
        element.modificacionFecha = this.oldDireccion.modificacionFecha;
        element.modificacionUsuario = this.oldDireccion.modificacionUsuario;
      }
    });

    this.limpiarTempDireccion();
  }

}
