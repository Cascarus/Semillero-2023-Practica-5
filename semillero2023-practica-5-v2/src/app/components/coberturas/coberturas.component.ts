import { Component, OnInit } from '@angular/core';
import { CoberturasService } from 'src/app/services/coberturas.service';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit{

  disabled:boolean = true;
  tabla:boolean = false;

  listaCoberturas:any;
  coberturas:any;
  rowsPerPageOptions:any
  firstIndex = 0;
  sizePage = 10;
  totalElements:any;
  totalPages:any;
  tempPage = 0;

  icon_cargar: boolean = false;
  valBusqueda = "";
  
  constructor(
    private coberturasServices:CoberturasService,
    private router: Router
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

    this.coberturasServices.mantenimiento(this.valBusqueda, 0 , this.sizePage).subscribe(
      res=>{
        this.listaCoberturas = res;
        this.coberturas = this.listaCoberturas.content;
        this.totalElements = this.listaCoberturas.totalElements;
        this.totalPages = this.listaCoberturas.totalPages;
      },
      err => console.log(err)
    );
    this.icon_cargar = false;
    this.tabla = true;
  }

  editarCoberturas(item:any){
    this.router.navigate(['coberturas/update/'+ item.id]);
  }

}
