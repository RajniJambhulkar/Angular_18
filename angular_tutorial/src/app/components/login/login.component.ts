import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj : any = {
    EmailId:'',
    Password:''
  }
  

  route = inject(Router);
  http = inject(HttpClient);
  onLogin(){
    this.http.post('https://projectapi.gerasim.in/api/UserApp/login', this.userObj).subscribe((res:any)=>{
      if(res.result){
      alert('login success');
      localStorage.setItem('loginUser', JSON.stringify(res.data));
      this.route.navigateByUrl('add-emp');
      }
      else{
        alert(res.message);
      }
    })

    // if(this.userObj.username=="Rajni" && this.userObj.password=="1234"){
    //   alert("Login success!");
    //   localStorage.setItem('loginUser', this.userObj.username);
    //   this.route.navigateByUrl('add-emp');
    // }
    // else{
    //   alert("Wrong Credentials!");
    // }
  }
}
