import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { delay } from 'rxjs';
import { Router } from '@angular/router';
import { SegurosService } from 'src/app/services/seguros.service';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit{

  disabled:boolean = true;
  tabla:boolean = false;

  listaPolizas:any;
  polizas:any;
  rowsPerPageOptions:any
  firstIndex = 0;
  sizePage = 10;
  totalElements:any;
  totalPages:any;
  tempPage = 0;

  valBusqueda = "";
  icon_cargar: boolean = false;

  constructor(
    private segurosServices:SegurosService,
    private router:Router
  ){}

  ngOnInit(){
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  rowsChange(event:any){
    this.sizePage = event;
  }

  anterior(){
    if ((this.tempPage - 1) < 0) return;
        this.tempPage = this.tempPage - 1;
        this.actualizarPagina(this.tempPage, this.sizePage);
  }

  siguiente(){
    if((this.tempPage + 1) >= this.totalPages) return;
    
    this.tempPage = this.tempPage + 1;
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  reset(){
    this.tempPage  = 0;
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  isFirst(){
    return false
  }
  
  isLast(){
    return false
  }

  onPageChange(event:any){
    this.sizePage = event.rows;
    this.actualizarPagina(event.page, this.sizePage);
  }

  clear() {
    this.valBusqueda = "";
  }

  evaluarValorInput(event:any){

    if (event.target instanceof HTMLInputElement) {
      this.valBusqueda = event.target.value;
      if (this.valBusqueda?.trim() !== '') {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  }

  buscar(){
    this.icon_cargar = true;

    this.segurosServices.mantenimiento(this.valBusqueda, 0 , this.sizePage).subscribe(
      res=>{
        this.listaPolizas = res;
        this.polizas = this.listaPolizas.content;
        this.totalElements = this.listaPolizas.totalElements;
        this.totalPages = this.listaPolizas.totalPages;
      },
      err => console.log(err)
    );
    this.icon_cargar = false;
    this.tabla = true;
  }

  actualizarPagina(page:number, size:number){
    this.segurosServices.verTodosPaginado(page, size).subscribe(
      res=>{
        this.listaPolizas = res;
        this.polizas = this.listaPolizas.content;
        this.totalElements = this.listaPolizas.totalElements;
        this.totalPages = this.listaPolizas.totalPages;
      },
      err=> console.log(err)
    );
  }

  editarClientes(item:any){
    this.router.navigate(['clientes/update/'+ item.id]);
  }

}
