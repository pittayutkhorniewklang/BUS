import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';  // ประกาศ confirmPassword
  role: string = 'user';  // ค่า default

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.http.post('http://localhost:3000/auth/register', user)
      .subscribe(
        response => {
          console.log('User registered:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error:', error);
        }
      );
  }
}