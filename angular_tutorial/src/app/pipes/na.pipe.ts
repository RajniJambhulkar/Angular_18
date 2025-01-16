import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'   //custom pipe
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !=null && value!='' && value!=undefined){
      return value;
    }
    else{
      return 'NA';
    }
  }

}
