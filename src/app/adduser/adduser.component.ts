import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user:User;  //to save the new user
  Admin:boolean;
  Client:boolean;
  Manager:boolean;
  results:User[]=this.auth.users;


  constructor(private auth : AuthService,private alertService:AlertService,private router:Router) {
    this.user=
    {UserName:'',
    Password:'',
    Admin:false,
    Manager:false,
    Client:false,
    id:100

   }
    this.Admin=this.auth.currentuser.Admin;
    this.Manager=this.auth.currentuser.Manager;
    this.Client=this.auth.currentuser.Client;
   }

  ngOnInit() {
  }

  remove(p: User) {
    this.auth.remove(p);
    this.alertService.success('Successfully removed.');
  }
  edit(p: User) {
    this.auth.edit(p);
  }

  Home(){
    this.router.navigate(['/home']);
  }

  save(){
    this.auth.add(this.user);
    this.auth.sync();
    this.clearform();


  }

  clearform(){
    this.user=
    {UserName:'',
    Password:'',
    Admin:true,
    Manager:false,
    Client:false,
    id:100

   }
  }

}
