import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './partial/header/header.component';
import { TravelcycleComponent } from './pages/travelcycle/travelcycle.component';
import { UserComponent } from './pages/admin/user/user.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReservationComponent } from './pages/reservation/reservation.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path :'contact-us',component:ContactUsComponent},
  {path : 'login', component:LoginComponent},
  {path : 'register',component:RegisterComponent},
 {path :'header',component:HeaderComponent},
 {path : 'travelcycle',component:TravelcycleComponent},
 {path : 'admin/user' , component:UserComponent},
 {path : 'reservation',component:ReservationComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
