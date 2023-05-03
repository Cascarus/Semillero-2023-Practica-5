import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoberturasService {

  private API_URL = environment.apiURL;

  constructor(private http: HttpClient) { }

  verTodosPaginado(noPage: number, size: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append("page", noPage)
      .append("size", size);

    return this.http.get<any>(this.API_URL + '/api/coberturas/verTodos2',{params:queryParams})
  }

  insertarCobertura(objeto:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(this.API_URL +'/api/coberturas/crearCoberturas', objeto, httpOptions).pipe(
      catchError(e=>"e")
    );
  }
}
