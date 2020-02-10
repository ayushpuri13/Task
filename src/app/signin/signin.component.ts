import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  UserName=new FormControl(' ');
  Password=new FormControl('',{validators:[Validators.required,Validators.minLength(3)]});
  flag:boolean;
 

  constructor(private auth:AuthService, private router:Router,private alertService:AlertService) { }

  ngOnInit() {
    console.log('signin');
    this.flag=true;
    this.auth.currentuser=
     {UserName:'admin',
     Password:'admin',
     Admin:true,
     Manager:false,
     Client:false,
     id:100

    }
    
     this.auth.Getdata();
    //  this.auth.users=[
    //   {UserName:'admin',
    //   Password:'admin',
    //   Admin:true,
    //   Manager:false,
    //   Client:false,
    //   id:100
 
    //  }]


  }


  Auth(){   //fu to check authentication of the user
    console.log('hii')

    for(let i of this.auth.users)
    { console.log('hii')
      console.log(this.UserName.value)
      
      
      if(this.UserName.value==i.UserName )
      {
        
        
        if(this.Password.value==i.Password  )
        {
          
          
            this.router.navigate(['/adduser']);
            this.flag=false;
            this.auth.currentuser.UserName=i.UserName;
            this.auth.currentuser.Password=i.Password;
            this.auth.currentuser.Manager=i.Manager;
            this.auth.currentuser.Client=i.Client;
            this.auth.currentuser.id=i.id;
            this.auth.currentuser.Admin=i.Admin;
            break;

          }

        }

     else if(this.UserName.value=="admin" && this.Password.value=="admin"){
          
        
          this.router.navigate(['/adduser']);
          this.flag=false;
          i.Admin=true;
          i.Manager=false;
          i.Client=false;
          i.id=100;
          
          this.auth.currentuser.UserName='admin';
          this.auth.currentuser.Password='admin';
          this.auth.currentuser.Manager=false;
          this.auth.currentuser.Client=false;
          this.auth.currentuser.id=100;
          this.auth.currentuser.Admin=true;
          break;
          

      }
      
      }
        if(this.flag){
          this.alertService.danger('Wrong Credentials');
        }      
        
        else{
          this.alertService.success('Login Successfully')
        }  
        
      }
 
}
