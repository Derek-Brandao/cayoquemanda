import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { Regi} from '../../interfaces/regi';
import { ApiService } from '../url/api.service';
import { AlertService } from '../alerts/alert.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class RegiService {

  results: Observable<any>;
  constructor(

    private http: HttpClient,
    private api: ApiService,
    public alert: AlertService,
    
  ) { }

  // POST: Enviar dados do cadstro para a API
  postCadastrar(professor): Observable<Regi> {
    return this.http.post<Regi>(`${this.api.url + this.api.cadastrarProfessor}`, professor).pipe(
      
      map(results => {

        this.alert.openSnackBar(results['message'], "Ok");
        return results[''];


      }),
      
    );
      
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  

  
        return of(result as T);
      };
    }

}