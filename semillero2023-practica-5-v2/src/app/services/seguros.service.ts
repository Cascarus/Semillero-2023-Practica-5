import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  private API_URL = environment.apiURL;

  constructor(private http: HttpClient) { }

  verTodosPaginado(noPage: number, size: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append("page", noPage)
      .append("size", size);

    return this.http.get<any>('/api/seguros/verTodos2',{params:queryParams})
  }

  crearPoliza(objeto:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>('/api/seguros/crearSeguros', objeto, httpOptions).pipe(
      catchError(e=>"e")
    );
  }

  mantenimiento(busqueda: string, noPage: number, size: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append("page", noPage)
      .append("size", size);

      if(busqueda.toLowerCase() == 'activo'){
        busqueda = 'a';
      }else if(busqueda.toLowerCase() == 'inactivo'){
        busqueda = 'i';
      }

    return this.http.get<any>('/api/coberturas/mantenimiento/' + busqueda, { params: queryParams })
  }

  verById(id:number) {
    let queryParams = new HttpParams();

    return this.http.get<any>('/api/coberturas/verId/'+id, { params: queryParams })
  }

  modificarCoberturas(objeto:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<any>('/api/coberturas/modificarCoberturas', objeto, httpOptions).pipe(
      catchError(e=>"e")
    );
  }
}
