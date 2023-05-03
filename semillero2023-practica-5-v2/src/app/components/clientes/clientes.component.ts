import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Table } from 'primeng/table';
import { delay } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  disabled:boolean = true;
  tabla:boolean = false;

  listaClientes:any;
  clientes:any;
  rowsPerPageOptions:any
  firstIndex = 0;
  sizePage = 10;
  totalElements:any;
  totalPages:any;
  tempPage = 0;

  valBusqueda = "";
  icon_cargar: boolean = false;


  
  constructor(private clientesServices:ClientesService){}

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

  clear(table: Table) {
    table.clear();
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

    this.clientesServices.mantenimiento(this.valBusqueda, 0 , this.sizePage).subscribe(
      res=>{
        this.listaClientes = res;
        this.clientes = this.listaClientes.content;
        this.totalElements = this.listaClientes.totalElements;
        this.totalPages = this.listaClientes.totalPages;
        delay(5000);
      },
      err => console.log(err)
    );
    this.icon_cargar = false;
    this.tabla = true;
  }

  actualizarPagina(page:number, size:number){
    this.clientesServices.mantenimiento(this.valBusqueda, page, size).subscribe(
      res=>{
        this.listaClientes = res;
        this.clientes = this.listaClientes.content;
        this.totalElements = this.listaClientes.totalElements;
        this.totalPages = this.listaClientes.totalPages;
      },
      err=> console.log(err)
    );

  }
}
