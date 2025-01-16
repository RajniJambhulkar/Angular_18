import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj : any = {
    firstname:'',
    lastname:'',
    username: '',
    city:'',
    state:'',
    pincode:'',
    isAcceptTerms:false

  }
  formValue :any;
  submitForm(){
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm(){
    this.studentObj = {
      firstname:'',
      lastname:'',
      username: '',
      city:'',
      state:'',
      pincode:'',
      isAcceptTerms:false
  }
}
}
