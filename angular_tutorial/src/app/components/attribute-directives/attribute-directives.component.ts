import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {

  div1BgColor : string = "bg-primary";
  div2BgColor : boolean = false;

  num1 : string = "";
  num2 : string = "";
  isChecked : boolean = false;

  objectList : any[] = [{srno:111, name:"watermelon", waterContent : 90, city:'kashmir', isActive:true},
    {srno:112, name:"apple", waterContent : 60, city:'kashmir', isActive:false},
    {srno:113, name:"mango", waterContent : 50, city:'ratnagiri', isActive:true},
    {srno:114, name:"banana", waterContent : 40, city:'vijaywada', isActive:false},
    {srno:115, name:"orange", waterContent : 80, city:'nagpur', isActive:true}
  ]

  customStyle : any = {
    'background-color':'teal',
    'color':'white',
    'font-size':'20px',
    'text-align':'center'

  }

  makeRed(){
    this.div1BgColor = "bg-danger";
  }
  makeBlue(){
    this.div1BgColor = "bg-primary";
  }
  changeToggle(){
    this.div2BgColor = !this.div2BgColor;
  }
}
