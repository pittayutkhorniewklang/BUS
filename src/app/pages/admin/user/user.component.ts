import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service'; // นำเข้า SharedService

@Component({
  selector: 'app-user-management',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [
    { name: 'สมชาย ใจดี', email: 'somchai@example.com', phone: '0812345678', status: 'Active' },
    { name: 'สมหญิง สวยงาม', email: 'somying@example.com', phone: '0891234567', status: 'Inactive' }
  ];
  
  reservationData: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // ดึงข้อมูลการจองจาก SharedService
    this.reservationData = this.sharedService.getReservationData();
  }

  // ฟังก์ชันอื่นๆ ที่มีอยู่แล้วใน component
}
