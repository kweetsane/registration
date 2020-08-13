import { Component } from '@angular/core';
import{User}from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register-app';
  registration = [] ;




  name ;
  lastname ;
  Id;
  Contact;
  Email;

  editId ;
 


  adduser(firstname,surname,id,contact,email){
   
  
  }
delete(i){


console.log(i);
this.registration.splice(i,1);
}

edit (i)  {

  console.log(this.registration[i]);

  this.name =this.registration[i].firstname ;
  this.lastname =this.registration[i].surname ;
  this. Id=this.registration[i].id;
  this.Contact =this.registration[i].contact;
  this.Email=this.registration[i].email ;

  this.editId = i
}

updateUser(firstname,surname,id,contact,email){
this.registration.splice(this.editId , 1 ,new User(firstname,surname,id,contact,email) )
}
}
