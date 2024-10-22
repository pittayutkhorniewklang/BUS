import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private reservationData: any[] = []; // เก็บข้อมูลการจอง

  setReservationData(data: any) {
    this.reservationData.push(data); // เพิ่มข้อมูลการจองใน array
  }

  getReservationData() {
    return this.reservationData; // คืนค่าข้อมูลการจองทั้งหมด
  }
}
