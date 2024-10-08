import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // แสดงข้อมูลใน Console
    console.log('ชื่อผู้ใช้:', this.username);
    console.log('อีเมล:', this.email);
    console.log('รหัสผ่าน:', this.password);
    console.log('ยืนยันรหัสผ่าน:', this.confirmPassword);
  }
}
