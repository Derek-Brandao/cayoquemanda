import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../interfaces/anamnese';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  
    anamnese = {};

  constructor(
    
    public router: Router,
    
  ) {
    this.anamnese  = this.router.getCurrentNavigation().extras.state
   }

  ngOnInit() {
    console.log(this.anamnese);
  }


  

  voltarParaHome(){
    this.router.navigate(['home']);
  }

}


