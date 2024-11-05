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
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RoutesComponent } from './pages/admin/routes/routes.component';
import { ReserveComponent } from './pages/admin/reserve/reserve.component';
import { PaymentComponent } from './pages/payment/payment.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path :'contact-us',component:ContactUsComponent},
  {path : 'login', component:LoginComponent},
  {path : 'register',component:RegisterComponent},
 {path :'header',component:HeaderComponent},
 {path : 'travelcycle',component:TravelcycleComponent},
 {path : 'admin/user' , component:UserComponent},
 {path : 'reservation',component:ReservationComponent},
 {path : 'admin',component:DashboardComponent},
 {path : 'admin/routes',component:RoutesComponent},
 {path : 'admin/reserve',component:ReserveComponent},
 {path : 'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
