import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoberturasService } from 'src/app/services/coberturas.service';

@Component({
  selector: 'app-update-cobertura',
  templateUrl: './update-cobertura.component.html',
  styleUrls: ['./update-cobertura.component.css']
})
export class UpdateCoberturaComponent implements OnInit{

  cobertura:any;
  listTipo:any =  [
    {id: "i", tipo:"Inhabilitado"},
    {id: "a", tipo:"Activo"},
  ];

  constructor(
    private coberturasServices:CoberturasService,
    private router:Router,
    private active:ActivatedRoute
    ){};

  ngOnInit(): void {
    const param = this.active.snapshot.params;
    var id:number = param['id'];
    this.getCobertura(id);
      
  }

  getUsr(){
    return "quemado";
  }

  getCobertura(id:number){
    this.coberturasServices.verById(id).subscribe(
      res=>{
        this.cobertura = res;
      },
      err => console.log(err)
    );
  }

  modificarRegistro(){
    this.cobertura.modificacionUsuario = this.getUsr();
    this.coberturasServices.modificarCoberturas(this.cobertura).subscribe(
      err => console.log(err)
    );
    alert("la cobertura se ha modificado exitosamente");
  }


}
