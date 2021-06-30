import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin) : Observable<UserLogin>{
    //return this.http.post<UserLogin>('https://blogpedroatualizado.herokuapp.com/usuarios/logar', userLogin)
    return this.http.post<UserLogin>('https://backendthiagofaccipieri.herokuapp.com/usuarios/logar', userLogin)

  }
  cadastrar(usuario: Usuario) : Observable<Usuario>{
    //return this.http.post<Usuario>('https://blogpedroatualizado.herokuapp.com/usuarios/cadastrar', usuario)
    return this.http.post<Usuario>('https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar', usuario)


  }
}
