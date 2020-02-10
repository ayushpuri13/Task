import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
                       {path:"signin" ,component:SigninComponent},
                       {path:"adduser" ,component:AdduserComponent},
                       {path:"home" ,component:HomeComponent},
                       {path:"" ,component:SigninComponent},
                       {path:"view" ,component:ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
