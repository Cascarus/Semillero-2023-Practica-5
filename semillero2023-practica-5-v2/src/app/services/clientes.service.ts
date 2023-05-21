import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API_URL = environment.apiURL;

  constructor(private http: HttpClient) { }

  verTodos() {
    let queryParams = new HttpParams();

    return this.http.get<any>('/api/clientes/verTodos')
  }

  verTodosPaginado(noPage: number, size: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append("page", noPage)
      .append("size", size);

    return this.http.get<any>('/api/clientes/verTodos2', { params: queryParams })
  }

  mantenimiento(busqueda: string, noPage: number, size: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append("page", noPage)
      .append("size", size);

    return this.http.get<any>('/api/clientes/mantenimiento/' + busqueda, { params: queryParams })
  }

  agregarClientes(objeto:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>('/api/clientes/crearCliente', objeto, httpOptions).pipe(
      catchError(e=>"e")
    );
  }

  verById(id:number) {
    let queryParams = new HttpParams();

    return this.http.get<any>('/api/clientes/verId/'+id, { params: queryParams })
  }

  modificarClientes(objeto:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<any>('/api/clientes/modificarCliente', objeto, httpOptions).pipe(
      catchError(e=>"e")
    );
  }
}
