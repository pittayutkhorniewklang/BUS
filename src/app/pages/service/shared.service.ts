import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // เก็บข้อมูลการจองที่ถูกส่งจากหน้า reservation
  private reservationData: any[] = [];

  // ฟังก์ชันบันทึกข้อมูลการจอง
  setReservationData(data: any) {
    this.reservationData.push(data);
  }

  // ฟังก์ชันดึงข้อมูลการจอง
  getReservationData() {
    return this.reservationData;
  }
}
