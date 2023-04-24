import { Component, OnInit } from '@angular/core';
import { CoberturasService } from 'src/app/services/coberturas.service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit{

  PolizasList: any = [];

  poliza: any;

  ActivateAddComp1:boolean = false;
  ActivateAddComp2:boolean = false;

  PolizaFilter: string = "";
  PolizaNoFilter: any = [];

  listaCoberturas:any;
  coberturas:any;
  rowsPerPageOptions:any
  firstIndex = 0;
  sizePage = 10;
  totalElements:any;
  totalPages:any;
  tempPage = 0;
  
  constructor(private coberturasServices:CoberturasService){}

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
    this.coberturasServices.verTodosPaginado(page, size).subscribe(
      res=>{
        this.listaCoberturas = res;
        console.log(res);
        this.coberturas = this.listaCoberturas.content;
        this.totalElements = this.listaCoberturas.totalElements;
        this.totalPages = this.listaCoberturas.totalPages;
      },
      err=> console.log(err)
    );

  }

  clear(table: Table) {
    table.clear();
  }

  addCliente(){

  }

  closeClick1(){
    //this.ActivateAddComp1 = false;
    //this.getPoliza(); 
  }

  FilterPoliza(){
    var PoliFilter = this.PolizaFilter;

    /*this.PolizasList = this.PolizaNoFilter.filter(function(e:any){
      return e.idPoliza.toString().toLowerCase().includes(
        PoliFilter.toString().trim().toLowerCase()
      )|| e.Descripcion.toString().toLowerCase().includes(
        PoliFilter.toString().trim().toLowerCase()
      )
    });*/
  }

}
