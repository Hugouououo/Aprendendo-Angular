import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{

  constructor(private http:HttpClient) { }

  //url do JSON SERVER
  private apiUrl = 'http://localhost:3000/usuarios';

  //buscar os dados
  public getUsuarios(){
    return this.http.get(this.apiUrl);
  }

  //cadastrar o usuario
  public postUsuario(usuario:any){
    return this.http.post(this.apiUrl, usuario)
  }
}
