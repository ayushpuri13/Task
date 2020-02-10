import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Admin } from '../admin.model';
import { Router } from '@angular/router';
import { Manager } from '../manager.model';
import { Client } from '../client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:Admin[];
  resultmanager:Manager[];
  resultclient:Client[];
  Admin:boolean;
  Manager:boolean;
  Client:boolean;
  constructor(private http :HttpClient,private auth :AuthService,private router:Router) {
    this.Admin=this.auth.currentuser.Admin;
    this.Manager=this.auth.currentuser.Manager;
    this.Client=this.auth.currentuser.Client;
    
if(this.Admin){
  this.getadmin().subscribe((result)=>{
    this.result=result;
  });
}
else if(this.Manager){
  this.getmanager().subscribe((result)=>{
    this.resultmanager=result;
}
)}
else{
  this.getclient().subscribe((result)=>{
    this.resultclient=result;
}
  )}
   
  }
  ngOnInit() {
  }

  getadmin(){
    return this.http.get<Admin[]>('../assets/api/super_admin.json')

  }

  getmanager(){
    return this.http.get<Manager[]>('../assets/api/manager.json')

  }
  getclient(){
    return this.http.get<Client[]>('../assets/api/client.json')

  }


  adduser(){
    this.router.navigate(['/adduser'])
  }

}
