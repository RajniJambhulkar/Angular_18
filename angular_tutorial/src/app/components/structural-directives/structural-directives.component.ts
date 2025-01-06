import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isDiv1Visible : boolean = true;
  isDiv2Visible : boolean = true;
  num1 : string = "";
  num2 : string = "";
  isChecked : boolean = true;
  country : string = "";
  cityArray : string [] = ['Pune','Mumbai','Nashik', 'Nagpur'];

  objectList : any[] = [{srno:111, name:"apple", city:'kashmir', isActive:true},
    {srno:112, name:"apple", city:'kashmir', isActive:false},
    {srno:113, name:"mango", city:'ratnagiri', isActive:true},
    {srno:114, name:"banana", city:'vijaywada', isActive:false},
    {srno:115, name:"orange", city:'nagpur', isActive:true}
  ]

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
