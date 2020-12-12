import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../interfaces/anamnese';

@Component({
  selector: 'app-anamnese-detalhada',
  templateUrl: './anamnese-detalhada.component.html',
  styleUrls: ['./anamnese-detalhada.component.css']
})
export class AnamneseDetalhadaComponent implements OnInit {
  anamnese: Anamnese;
  constructor() {
    this.anamnese = JSON.parse(window.localStorage.getItem('current_anamnese'));
  }

  ngOnInit() {
  }

}
