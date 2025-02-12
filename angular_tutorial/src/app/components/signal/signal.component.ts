import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush       //disabling change detection
})
export class SignalComponent {
  firstName = signal("Rajni");
  lastName = signal("Jambhulkar");
  middleName : string = "K";
  cityArray = signal(['nagpur', 'pune', 'mumbai']);
  studentObj = signal({rollno: 101, name:"Jay", city:"pune"})

  fullName = computed(()=>this.firstName()+" "+this.lastName());

  constructor(){
    setTimeout(()=>this.firstName.set("Gaurav"), 5000);
    setTimeout(()=>this.lastName.set("Hajare"), 5000);
    setTimeout(()=>{this.middleName = "Rohit"}, 5000);
  }
  changeCity(){
    this.studentObj.set({...this.studentObj(), city:"Mumbai"});
  }
  addCity(){
    this.cityArray.set([...this.cityArray(), 'Karad']);
  }

}


