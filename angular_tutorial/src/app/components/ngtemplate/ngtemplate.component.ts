import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
  isUserloggedIn : boolean = false;
  userName : string = "Rajni";

  @ViewChild('dynamicTem') dynaTemplate : TemplateRef<any> | undefined;
  @ViewChild('dynaContainer', {read:ViewContainerRef}) dyanContainer : ViewContainerRef | undefined;

  loadTemplate(){
    if(this.dynaTemplate){
      this.dyanContainer?.createEmbeddedView(this.dynaTemplate)
    }
  }
}
