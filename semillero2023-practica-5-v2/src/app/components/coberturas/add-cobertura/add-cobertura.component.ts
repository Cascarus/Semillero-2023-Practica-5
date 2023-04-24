import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoberturasService } from 'src/app/services/coberturas.service';

@Component({
  selector: 'app-add-cobertura',
  templateUrl: './add-cobertura.component.html',
  styleUrls: ['./add-cobertura.component.css']
})
export class AddCoberturaComponent implements OnInit{
  period:any;
  
  ActivateSucces:boolean = false;
  ActivateErr:boolean = false;
  SuccesMsm:string = "";
  ErrMsm:string = "";

  constructor(private coberturasServices:CoberturasService){}

  listTipo:any =  [
    {id: 1, tipo:"Mensual"},
    {id: 2, tipo:"Bimensual"},
    {id: 3, tipo:"Trimestral"},
    {id: 4, tipo:"Semestral"},
    {id: 5, tipo:"Anual"}
  ];

  ngOnInit(): void {
    delete this.period.Año;
    delete this.period.Estado;
    delete this.period.Mes;
    
    console.log(this.period);
  }

  crearRegistro(){
    console.log(this.period);

    if(this.period.TimePeriod == 0){
      this.ActivateErr = true;
      this.ErrMsm = "Debe seleccionar un perido";
      return;
    }
    
  }

}
