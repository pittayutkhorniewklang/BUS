import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// สร้าง interface สำหรับโครงสร้างข้อมูลที่ได้จาก API
interface LoginResponse {
  message: string;
  token: string;      // เพิ่ม token
  username: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };
  
    this.http.post<LoginResponse>('http://localhost:3000/auth/login', loginData)
      .subscribe(
        (response: LoginResponse) => {
          alert('Login successful');
          console.log('API Response:', response);
  
          // Store token, username, and role in localStorage
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('user', JSON.stringify({
            username: response.username,
            role: response.role
          }));
  
          // Redirect based on user role
          if (response.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          alert('Login failed');
          console.error('Login error:', error);
        }
      );
  }}
