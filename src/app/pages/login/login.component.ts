import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  // ประกาศตัวแปร email
  password: string = '';  // ประกาศตัวแปร password

  // ฟังก์ชัน onSubmit สำหรับจัดการการกดปุ่ม Submit
  onSubmit() {
    if (this.email && this.password) {
      // แสดงข้อมูล email และ password ใน console
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }
}
