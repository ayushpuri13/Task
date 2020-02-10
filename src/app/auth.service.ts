import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[];
  counter:number=0;
  editIndex:number=-1;
  currentuser:User;  //for current user logged in

  constructor(private localstorage:LocalStorageService) {
   
   }




  Getdata(){
     this.users=(this.localstorage.retrieve('users'));
    if(!this.users){
      this.users=Array();
      
    }
  }


  sync(){
    this.localstorage.store('users',this.users);
  }

  add(p: User) {
    console.log('service add is called');
    p.id = ++this.counter;
    this.users.push(p);
    // Products are updated in the LocalStorage.
    this.sync();
  }
  remove(p: User) {
   // index of the product in the array is obtained
    const index = this.users.indexOf(p);
    // using the index, element is removed from the array
    this.users.splice(index, 1);
    // Products are updated in the LocalStorage.
    this.sync();
  }
  edit(p: User) {
    // index of the product to be updated is obtained
    this.editIndex = this.users.indexOf(p);
    // route is changed to the new component.
    // this.router.navigate(['new']);
    this.update(p); 
   }
   update(p: User) {
    // array element is updated
    this.users.splice(this.editIndex,1,p);
    // Products are updated in the LocalStorage.
    this.sync();
    // edit index is changed to -1
    this.editIndex = -1;
    // route is changed to the view component.
    // this.router.navigate(['view']); 
   }
}



