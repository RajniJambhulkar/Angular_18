import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //typescript is to written inside a class
  //declaring variable
  course : string = "Java";
  inputType = "checkbox";
  rollNo : number = 101;
  pass : boolean = true;
  currentDate : Date = new Date();
  state : string = "Maharashtra";
  myClassName : string = "bg-primary";

  firstName = signal("Rajni");
  changeName(){
    this.firstName.set("Jambhulkar");
  }
  constructor(){
    this.rollNo=200;
  }
  onPress(message:string){
    alert(message);
  }
}
