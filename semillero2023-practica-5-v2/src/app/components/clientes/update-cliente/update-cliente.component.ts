import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent {
  
  cliente:any;
  direcciones:any = [];

  tablaDirecciones = false;
  
  tempDireccion:any;
  oldDireccion:any = {};

  listTipo:any =  [
    {id: "i", tipo:"Inhabilitado"},
    {id: "a", tipo:"Activo"},
  ];

  constructor(private clientesServices:ClientesService, private active:ActivatedRoute){}

  ngOnInit(): void {
    const param = this.active.snapshot.params;
    var id:number = param['id'];
    this.getCliente(id);
    

    this.tempDireccion = {
      direccion: "",
      estado:"",
      grabacionUsuario:""
    };
  }

  getCliente(id:number){
    this.clientesServices.verById(id).subscribe(
      res=>{
        this.cliente = res;
        this.direcciones = res.direccionesList;
      },
      err=> console.log(err)
    );
  }

  getUsr(){
    return "quemado";
  }

  guardarRegistro(){
    this.cliente.direccionesList = this.direcciones;
    this.cliente.modificacionUsuario = this.getUsr();
    this.clientesServices.modificarClientes(this.cliente).subscribe(
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

    this.oldDireccion.clienteId = item.clienteId;
    this.oldDireccion.direccion = item.direccion;
    this.oldDireccion.estado = item.estado;
    this.oldDireccion.grabacionFecha = item.grabacionFecha;
    this.oldDireccion.grabacionUsuario = item.grabacionUsuario;
    this.oldDireccion.id = item.id;
    this.oldDireccion.modificacionFecha = item.modificacionFecha;
    this.oldDireccion.modificacionUsuario = item.modificacionUsuario;
  }

  eliminarDireccion(item:any){
    this.direcciones.pop(item);
  }

  cancelarCambioDireccion(){
    this.direcciones.forEach(element => {
      if(element.direccion == this.tempDireccion.direccion || element.id == this.tempDireccion.id){
        element.clienteId = this.oldDireccion.clienteId;
        element.direccion = this.oldDireccion.direccion;
        element.estado = this.oldDireccion.estado;
        element.grabacionFecha = this.oldDireccion.grabacionFecha;
        element.grabacionUsuario = this.oldDireccion.grabacionUsuario;
        element.id = this.oldDireccion.id;
        element.modificacionFecha = this.oldDireccion.modificacionFecha;
        element.modificacionUsuario = this.oldDireccion.modificacionUsuario;
      }
    });

    this.limpiarTempDireccion();
  }
}
