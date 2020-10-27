import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anamnese } from '../interfaces/anamnese';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly url: string = 'http://localhost:5000';


  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    
  }




  
  getAnameses(): Observable<Anamnese[]> {
    return this.http.get<Anamnese[]>(`${this.url}/anamnese`);
  }

  deleteAnamnese(anamnese: Anamnese) {
    return this.http.delete(`${this.url}/anamnese/${anamnese.id}`);
  }
}
