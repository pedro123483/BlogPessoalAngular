import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin) : Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar' , userLogin)
    //return this.http.post<UserLogin>('https://blogpedroatualizado.herokuapp.com/usuarios/logar', userLogin)
    //return this.http.post<UserLogin>('https://backendthiagofaccipieri.herokuapp.com/usuarios/logar', userLogin)

  }
  cadastrar(usuario: Usuario) : Observable<Usuario>{
    
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
    //return this.http.post<Usuario>('https://blogpedroatualizado.herokuapp.com/usuarios/cadastrar', usuario)
    //return this.http.post<Usuario>('https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar', usuario)


  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true 
    }

    return ok
  }
}
