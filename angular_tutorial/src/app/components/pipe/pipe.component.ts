import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'] // Fixed property name
})
export class PipeComponent {
  firstName = "Rajni";
  currentDate = new Date();
  student = {
    rollno: 101,
    name: 'Rajni',
    marks: ''
  };
  currentTime : Observable<Date> = new Observable<Date>;

  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

  numberObservable: Observable<number> = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete();
  });

  ngOnInit() {
    this.numberObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error('Error: ' + err),
      complete: () => console.log('Completed')
    });
  }
}

