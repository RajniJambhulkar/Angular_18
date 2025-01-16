import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [FormsModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  studentForm : FormGroup = new FormGroup({
    firstname : new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastname : new FormControl(""),
    username : new FormControl("example@gmail.com"),
    city : new FormControl(""),
    state : new FormControl(""),
    pincode : new FormControl(""),
    isAcceptForm : new FormControl(""),
  })
  formValue : any;
  submitForm(){
    this.formValue = this.studentForm.value;
  }

}
