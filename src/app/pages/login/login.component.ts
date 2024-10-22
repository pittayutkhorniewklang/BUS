import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// สร้าง interface สำหรับโครงสร้างข้อมูลที่ได้จาก API
interface LoginResponse {
  message: string;
  username: string;  // เพิ่ม username
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

          // เก็บข้อมูล username และ role ลงใน localStorage
          localStorage.setItem('user', JSON.stringify({
            username: response.username,  // เก็บ username
            role: response.role           // เก็บ role
          }));

          // เปลี่ยนเส้นทางไปยังหน้าหลัก
          this.router.navigate(['/']);
        },
        error => {
          alert('Login failed');
          console.error('Login error:', error);
        }
      );
  }
}
