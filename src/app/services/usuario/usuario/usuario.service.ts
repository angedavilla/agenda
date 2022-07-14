import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../../../pages/interfaces/i-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.url}/usuario`);
  }

  public getUsuario(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/usuario/${id}`);
  }

  public addUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.url}/usuario`, usuario);
  }

  public updateUsuario(id: number , data: IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.url}/usuario/${id}`, data);
  }

  public deleteUsuario(id: number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(`${this.url}/usuario/${id}`);
  }
}
