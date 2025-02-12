export class User{
    
      id : number;
      name:string;
      username:string;
      email:string;
      address?:any;
      phone?:string;
      website?:string;
      company?:any;

      constructor(){
        this.id=0;
        this.name='';
        this.username='';
        this.email='';
      }

}