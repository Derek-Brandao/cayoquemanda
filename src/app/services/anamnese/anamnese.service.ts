import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anamnese } from 'src/app/interfaces/anamnese';
import { AlertService } from '../alerts/alert.service';
import { ApiService } from '../url/api.service';

@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService,
    public alert: AlertService,
  ) { }

  getAnamnese(): Observable<Anamnese[]> {
    return this.http.get<Anamnese[]>(`${this.api.url + this.api.anamnese}`).pipe(map(result => result['data']));
  }
}
