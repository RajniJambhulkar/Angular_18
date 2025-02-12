import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  routes = inject(Router)
  userData : any;

  constructor(){
    const userLoginData = localStorage.getItem('loginUser');
    if(userLoginData!=null){
      this.userData = JSON.parse(userLoginData);
    }
  }

  logout(){
    localStorage.removeItem('loginUser');
    this.routes.navigateByUrl('login');
  }

}
