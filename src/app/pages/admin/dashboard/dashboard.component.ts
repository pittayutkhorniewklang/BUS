import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TripService } from '../../service/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userCount: number = 0;
  reservationCount: number = 0;
  recentReservations: any[] = [];

  constructor(private userService: UserService, private tripService: TripService) {}

  ngOnInit() {
    this.loadUserCount();
    this.loadReservationCount();
    this.loadRecentReservations();
  }

  loadUserCount() {
    this.userService.getUserCount().subscribe(count => {
      this.userCount = count;
    });
  }

  loadReservationCount() {
    this.tripService.getReservations().subscribe(reservations => {
      this.reservationCount = reservations.length; // ใช้ความยาวของรายการการจอง
    });
  }

  loadRecentReservations() {
    // ดึงข้อมูลการจองล่าสุดในที่นี้
    this.tripService.getReservations().subscribe(reservations => {
      this.recentReservations = reservations.slice(0, 5); // แสดงการจองล่าสุด 5 รายการ
    });
  }
}
