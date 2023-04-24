import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  PolizasList: any = [];

  poliza: any;

  ActivateAddComp1:boolean = false;
  ActivateAddComp2:boolean = false;

  PolizaFilter: string = "";
  PolizaNoFilter: any = [];

  listaClientes:any;
  clientes:any;
  rowsPerPageOptions:any
  firstIndex = 0;
  sizePage = 10;
  totalElements:any;
  totalPages:any;
  tempPage = 0;
  
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

  actualizarPagina(page:number, size:number){
    this.clientesServices.verTodosPaginado(page, size).subscribe(
      res=>{
        this.listaClientes = res;
        console.log(res);
        this.clientes = this.listaClientes.content;
        this.totalElements = this.listaClientes.totalElements;
        this.totalPages = this.listaClientes.totalPages;
      },
      err=> console.log(err)
    );

  }

  clear(table: Table) {
    table.clear();
  }

  addCliente(){

  }
}
