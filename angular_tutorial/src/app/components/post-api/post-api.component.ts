import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{
  deptObj : any = {
  "departmentId": 0,
  "departmentName": "",
  "departmentLogo": ""
  }
  allDepts : any[] = [];
  http = inject(HttpClient);


  ngOnInit(): void{
    this.getDepartments();
  }

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Department sucessfully created!");
        this.getDepartments();
      }
      else{
        alert(res.message);
      }
    })
  }
  getDepartments(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
      this.allDepts = res.data;
    })
  }

}
