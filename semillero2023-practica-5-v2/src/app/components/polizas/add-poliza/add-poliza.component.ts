import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoberturasService } from 'src/app/services/coberturas.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { delay } from 'rxjs';
import { SegurosService } from 'src/app/services/seguros.service';

@Component({
  selector: 'app-add-poliza',
  templateUrl: './add-poliza.component.html',
  styleUrls: ['./add-poliza.component.css']
})
export class AddPolizaComponent {

  filteredCoberturas: any = [];
  listaCoberturas: any = [];
  coberturas: any = [];
  txtCoberturas: any;
  sumaPrimaCoberturas = 0;
  sumaSumAseguraCoberturas = 0;
  displayBotonesCertificados = false;

  cantCertificados: number;
  txtContratante: string;
  tempContratante: any;
  filteredContratantes: any = [];
  listaContratantes: any = [];
  certificados: any = [];
  timeout: any = null;
  selectedContratante: boolean;
  displayCertificados = false;
  contadorCertificados = 1;
  valBusqueda:string = "";
  tipoSelectContratanteV2:number = 0;
  tituloModalContratnteV2:string = "";

  listaClientes:any;
  clientes:any;
  disabled:boolean = true;
  tabla:boolean = false;


  listaCertificados: any = [];

  poliza: any = {};
  

  rowsPerPageOptions: any
  firstIndex = 0;
  sizePage = 10;
  totalElements: any;
  totalPages: any;
  tempPage = 0;

  constructor(
    private coberturasServices: CoberturasService,
    private clientesServices: ClientesService,
    private segurosServices:SegurosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerCoberturas();
    this.poliza.tipo = null;
    this.poliza.fechaInicio = null;
    this.poliza.fechaFin = null;
    this.poliza.codigoContratante = null;
    this.poliza.nombreContratanteP = "";
    this.poliza.primaTotal = null;
    this.poliza.sumaAsegurada = null;
    this.poliza.estado = 'a';
    this.poliza.grabacionUsuario = this.getUsr();
    this.poliza.certificadosList = null;
  }

  getUsr(){
    return "quemado";
  }

  rowsChange(event: any) {
    this.sizePage = event;
  }

  anterior() {
    if ((this.tempPage - 1) < 0) return;
    this.tempPage = this.tempPage - 1;
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  siguiente() {
    if ((this.tempPage + 1) >= this.totalPages) return;

    this.tempPage = this.tempPage + 1;
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  reset() {
    this.tempPage = 0;
    this.actualizarPagina(this.tempPage, this.sizePage);
  }

  isFirst() {
    return false
  }

  isLast() {
    return false
  }

  onPageChange(event: any) {
    this.sizePage = event.rows;
    this.actualizarPagina(event.page, this.sizePage);
  }

  obtenerCoberturas() {
    this.coberturasServices.verTodos().subscribe(
      res => {
        this.listaCoberturas = res;
      },
      err => console.log(err)
    );
  }

  actualizarPagina(page: number, size: number) {
    this.coberturasServices.verTodosPaginado(page, size).subscribe(
      res => {
        this.listaCoberturas = res;
        this.totalElements = this.listaCoberturas.totalElements;
        this.totalPages = this.listaCoberturas.totalPages;
      },
      err => console.log(err)
    );

  }

  filterCobertura(event) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.listaCoberturas.length; i++) {
      let cobertura = this.listaCoberturas[i];
      if (cobertura.descripcion.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(cobertura);
      }
    }

    this.filteredCoberturas = filtered;
  }

  onSelectCobertura(event) {
    this.coberturas.push(event);
    this.sumaPrimaCoberturas += event.costo;
    this.sumaSumAseguraCoberturas += event.sumaAsegurada;

    for (var i = 0; i < this.listaCoberturas.length; i++) {
      if (this.listaCoberturas[i].id === event.id) {
        this.listaCoberturas.splice(i, 1);
        break;
      }
    }

    this.txtCoberturas = "";

    this.habilitarBontesCertificados();
  }

  eliminarCobertura(item: any) {
    this.listaCoberturas.push(item);
    this.sumaPrimaCoberturas -= item.costo;
    this.sumaSumAseguraCoberturas -= item.sumaAsegurada;

    for (var i = 0; i < this.coberturas.length; i++) {
      if (this.coberturas[i].id === item.id) {
        this.coberturas.splice(i, 1);
        break;
      } 
    }
    this.habilitarBontesCertificados();
  }

  vaciarCoberturas() {

    var coberturaLeght = this.coberturas.length;

    if (this.coberturas.length > 0) {

      for (var i = 0; i < coberturaLeght; i++) {
        this.listaCoberturas.push(this.coberturas[i]);
      }
      for (var i = 0; i < coberturaLeght; i++) {
        this.coberturas.pop();
      }
    }

    this.habilitarBontesCertificados();

  }

  llenarClientes() {
    this.clientesServices.verTodos().subscribe(
      res => {
        this.listaContratantes = res;
        console.log(this.listaContratantes);
      },
      err => console.log(err)
    );
  }

  filterContratante(event) {
    let filtered: any[] = [];
    let query = event.query;

    this.clientesServices.mantenimiento(query, 0, 100).subscribe(
      res => {
        this.listaContratantes = res.content;
      },
      err => console.log(err)
    );

    for (let i = 0; i < this.listaContratantes.length; i++) {
      let cobertura = this.listaContratantes[i];
      let fullname = cobertura.nit + " - " + cobertura.nombre + " " + cobertura.apellido + " - " + cobertura.dpi;
      cobertura.fullname = fullname;
      filtered.push(cobertura);
    }

    this.filteredContratantes = filtered;  

  }

  onSelectContratante(event) {
    this.tempContratante = event;
    this.selectedContratante = true;
  }
  
  onSelectContratanteV2(event:any, item:any, tipo:number) {  
    switch(tipo){
      case 1:
        this.listaCertificados[item.numero-1].codigoContratante = event.id;
        this.listaCertificados[item.numero-1].nombreContratante = event.nit + " - " + event.nombre + " " + event.apellido + " - " + event.dpi;
        this.clear();
        break;
      case 2:
        this.listaCertificados[item.numero-1].codigoAsegurado = event.id;
        this.listaCertificados[item.numero-1].nombreAsegurado = event.nit + " - " + event.nombre + " " + event.apellido + " - " + event.dpi;
        this.clear();
        break;
      case 3:
        this.poliza.codigoContratante = event.id;
        this.poliza.nombreContratanteP = event.nit + " - " + event.nombre + " " + event.apellido + " - " + event.dpi;
        this.clear();
        break;
      default:
        console.log("algo esta fallando en onSelectContratanteV2");
        break;
    }
  }

  onClearContratante(){
    this.tempContratante = null;
    this.selectedContratante = false;
  }

  clear() {
    this.valBusqueda = "";
    this.listaClientes = null;
    this.clientes = null;
    this.tabla = false;
    this.tipoSelectContratanteV2 = 0;
  }

  generateCertificados() {
    for(let i=0; i<this.cantCertificados; i++){
      var temp:any = {};
      temp.estado = 'a';
      
      temp.codigoContratante = null;
      temp.codigoAsegurado = null;
      temp.nombreContratante = null;
      temp.nombreAsegurado = null;
      temp.numero = this.contadorCertificados;

      if(this.selectedContratante) {
        temp.codigoContratante = this.tempContratante.id;
        temp.nombreContratante = this.tempContratante.fullname;
      }
    
      temp.prima = Math.round(this.sumaPrimaCoberturas*100)/100;
      temp.sumaAsegurada = Math.round(this.sumaSumAseguraCoberturas*100)/100;
      temp.grabacionUsuario = this.getUsr();
      temp.coberturasList = this.coberturas;

      this.listaCertificados.push(temp);
      this.contadorCertificados += 1;
    }

    this.actualizarTotales();
    this.displayCertificados = true;
  }

  eliminarCertificado(item: any) {
    this.contadorCertificados -= 1;
    for (var i = 0; i < this.listaCertificados.length; i++) {
      if (this.listaCertificados[i].numero === item.numero) {
        this.listaCertificados.splice(i, 1);
      }
      this.listaCertificados[i].numero = i+1;
    }
    this.actualizarTotales();
  }

  vaciarCertificados() {
    var certificadosLeght = this.listaCertificados.length;

    if (this.listaCertificados.length > 0) {
      for (var i = 0; i < certificadosLeght; i++) {
        this.listaCertificados.pop();
        this.contadorCertificados -= 1;
      }
    }
    this.actualizarTotales();
  }

  actualizarTotales(){
    if(this.contadorCertificados == 0){
      this.poliza.sumaAsegurada = 0.00;
      this.poliza.primaTotal = 0.00;
      return;
    }
    this.poliza.sumaAsegurada = (this.contadorCertificados -1) * Math.round(this.sumaSumAseguraCoberturas*100)/100;
    this.poliza.primaTotal = (this.contadorCertificados -1) * Math.round(this.sumaPrimaCoberturas*100)/100;
  }

  emitir(){
    console.log(this.listaCertificados);
    let formEmision:any = document.getElementById("formEmision")
    let valido = formEmision.reportValidity();
    
    if(valido){
      this.poliza.certificadosList = this.listaCertificados;

      this.segurosServices.crearPoliza(this.poliza).subscribe(
        res=>{
          alert("la poliza se ha registrado con exito");
        },
        err=> console.log(err)
      );
    }

    
    
  }

  habilitarBontesCertificados(){
    if(this.coberturas.length > 0){
      this.displayBotonesCertificados = true;
    }else{
      this.displayBotonesCertificados = false;
    }
  }

  limpiarContratante(item:any, tipo:number){
    this.tempContratante = item;
    this.tipoSelectContratanteV2 = tipo;

    switch(tipo){
      case 1:
        this.tituloModalContratnteV2 = "Contratante";
        break;
      case 2:
        this.tituloModalContratnteV2 = "Asegurado";
        break;
      case 3:
        this.tituloModalContratnteV2 = "Contratante de la Poliza";
        break;
      default:
        console.log("error en limpiarContratante");
        break;
    }
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

    this.clientesServices.mantenimiento(this.valBusqueda, 0 , this.sizePage).subscribe(
      res=>{
        this.listaClientes = res;
        this.clientes = this.listaClientes.content;
        this.totalElements = this.listaClientes.totalElements;
        this.totalPages = this.listaClientes.totalPages;
      },
      err => console.log(err)
    );
    this.tabla = true;
  }

}
