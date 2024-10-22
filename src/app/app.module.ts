import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './partial/header/header.component';
import { FormsModule } from '@angular/forms';
import { TravelcycleComponent } from './pages/travelcycle/travelcycle.component';
import { UserComponent } from './pages/admin/user/user.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { SharedService } from './pages/service/shared.service';
import { RouterModule } from '@angular/router'; // เพิ่ม RouterModule เพื่อแก้ไขข้อผิดพลาด
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    TravelcycleComponent,
    UserComponent,
    ContactUsComponent,
    ReservationComponent,
    ProfileComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]), // เพิ่ม RouterModule
    HttpClientModule,
  ],
  providers: [
    SharedService, 
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
