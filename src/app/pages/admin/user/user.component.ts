import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  reservationData: any[] = []; // ใช้เพื่อเก็บข้อมูลการจอง

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // ดึงข้อมูลการจองจาก SharedService
    this.reservationData = this.sharedService.getReservationData();
    console.log('Fetched reservation data:', this.reservationData); // ตรวจสอบข้อมูลที่ได้
  }

  // เมธอดสำหรับลบการจอง
  deleteReservation(booking: any) {
    const confirmDelete = confirm('คุณต้องการลบการจองนี้หรือไม่?');
    if (confirmDelete) {
      const index = this.reservationData.indexOf(booking);
      if (index > -1) {
        this.reservationData.splice(index, 1); // ลบการจองจากรายการ
      }
      console.log('Deleted booking:', booking);
    }
  }
}
