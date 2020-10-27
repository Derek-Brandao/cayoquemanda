import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../url/api.service';



@Injectable({
  providedIn: 'root'
})



export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private api: ApiService) {

      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
      return this.currentUserSubject.value;
  }

  login(matricula: any, senha: any) {
      return this.http.post<any>(`${this.api.url + this.api.autenticarProfessor}`, { matricula, senha })
          .pipe(map(user => {

// armazena detalhes do usuário e token jwt no armazenamento local para manter o usuário logado entre as atualizações da página
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              if(user && user.data) {
                if(user.data.nome && user.data.email && user.data.matricula ){
                  window.localStorage.setItem('nome', user.data.nome);
                  window.localStorage.setItem('email', user.data.email);
                  window.localStorage.setItem('matricula', user.data.matricula);
                }
              }
              return user;
          }));
      
  }

  getNome() {
    const nome = window.localStorage.getItem('nome');
    return nome;
  }

  getEmail() {
    const email = window.localStorage.getItem('email');
    return email;
  }

  getRGM() {
    const matricula = window.localStorage.getItem('matricula');
    return matricula;
  }

  logout() {
      
// remove o usuário do armazenamento local e define o usuário atual como nulo
      localStorage.removeItem('currentUser');
      localStorage.removeItem('nome');
      localStorage.removeItem('email');
      localStorage.removeItem('matricula');
      this.currentUserSubject.next(null);
  }


}
