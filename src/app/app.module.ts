import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './partial/header/header.component';
import { FormsModule } from '@angular/forms';
import { TravelcycleComponent } from './pages/travelcycle/travelcycle.component';
import { UserComponent } from './pages/admin/user/user.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';





@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    TravelcycleComponent,
    UserComponent,
    ContactUsComponent,
  

   
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
