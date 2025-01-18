import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-delete',
  imports: [FormsModule],
  templateUrl: './put-delete.component.html',
  styleUrl: './put-delete.component.css'
})
export class PutDeleteComponent {
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
    onEdit(data : any){
      this.deptObj = data;

    }
  
    onUpdate(){
      this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment", this.deptObj).subscribe((res:any)=>{
        if(res.result){
          alert("Department sucessfully updated!");
          this.getDepartments();
        }
        else{
          alert(res.message);
        }
      })
    }
    onDelete(id : number){
      const isDelete = confirm("Are you sure you want to delete?")
      if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId="+ id)
      .subscribe((res:any)=>{
        if(res.result){
          alert("Department deleted successfully!!");
          this.getDepartments();
        }
        else{
          alert(res.message)
        }
      })
    }
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
      this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
        this.allDepts = res.data;
      })
    }
}
