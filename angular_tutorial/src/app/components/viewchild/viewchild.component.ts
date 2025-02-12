import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') textbox? : ElementRef

  ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value;
    debugger;
  }
}
