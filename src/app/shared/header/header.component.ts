import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  returnUrl: string;
  currentUser: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // obtém o URL de retorno dos parâmetros da rota ou o padrão é '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }


  onSubmit(){
    this.authService.logout();
    this.router.navigate([this.returnUrl]);
    
  }
}
