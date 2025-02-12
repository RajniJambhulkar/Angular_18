import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../models/class/User';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  //inject HttpClient
  userList : User[] = [];
  customerList : any[] = [];

  constructor(private http: HttpClient){
    // this.getUsers();
    // this.getAllCustomers();
  }

  getUsers(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList = res;
    })
  }
  getAllCustomers(){
    debugger;
    this.http.get("http://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      debugger;
      this.customerList = res.data;
    },
  error=>{
    debugger;
  });
    
  }
}
