import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CoberturasService } from 'src/app/services/coberturas.service';

@Component({
  selector: 'app-add-cobertura',
  templateUrl: './add-cobertura.component.html',
  styleUrls: ['./add-cobertura.component.css']
})
export class AddCoberturaComponent implements OnInit{
  cobertura:any;
  
  ActivateSucces:boolean = false;
  ActivateErr:boolean = false;
  SuccesMsm:string = "";
  ErrMsm:string = "";

  constructor(private coberturasServices:CoberturasService, private router:Router){}

  listTipo:any =  [
    {id: 1, tipo:"Mensual"},
    {id: 2, tipo:"Bimensual"},
    {id: 3, tipo:"Trimestral"},
    {id: 4, tipo:"Semestral"},
    {id: 5, tipo:"Anual"}
  ];

  ngOnInit(): void {
    this.cobertura = {
      descripcion:"",
      costo: null,
      sumaAsegurada: null,
      grabacionUsuario: "sin-usr",
      modificacionUsuario: ""
  }
  }

  crearRegistro(){
    console.log(this.cobertura);

    if(this.cobertura.costo == 0 || this.cobertura.costo == null){
      this.ActivateErr = true;
      this.ErrMsm = "Debe ingresar un costo valido";
      return;
    }

    if(this.cobertura.sumaAsegurada == 0 || this.cobertura.sumaAsegurada == null){
      this.ActivateErr = true;
      this.ErrMsm = "Debe ingresar una Suma Asegurada";
      return;
    }

    this.coberturasServices.insertarCobertura(this.cobertura).subscribe(
      res =>{
        alert("la cobertura ha sido creada exitosamente");
        this.router.navigate(['coberturas']);
      },
      err => {
        this.ActivateErr = true;
        this.ErrMsm = err
      }
    );

  }

}
