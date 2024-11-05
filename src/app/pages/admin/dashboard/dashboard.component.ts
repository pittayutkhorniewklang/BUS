// dashboard.component.ts
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
  bookingCount: number = 0;
  routeCount: number = 0;
  tripCount: number = 0;
  recentReservations: any[] = [];

  constructor(private userService: UserService, private tripService: TripService) {}

  ngOnInit() {
    this.getUserCount();
    this.getBookingCount();
    this.getRouteCount();
    this.getTripCount();
    this.getRecentReservations();
  }

  getUserCount() {
    this.userService.getUserCount().subscribe(count => {
      this.userCount = count;
    });
  }

  getBookingCount() {
    this.tripService.getBookingCount().subscribe(count => {
      this.bookingCount = count;
    });
  }

  getRouteCount() {
    this.tripService.getRouteCount().subscribe(count => {
      this.routeCount = count;
    });
  }

  getTripCount() {
    this.tripService.getTripCount().subscribe(count => {
      this.tripCount = count;
    });
  }

  getRecentReservations() {
    this.tripService.getReservations().subscribe(reservations => {
      this.recentReservations = reservations.slice(0, 5); // แสดงเฉพาะ 5 รายการล่าสุด
    });
  }

  deleteReservation(id: number) {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.tripService.deleteReservation(id).subscribe(() => {
        this.getRecentReservations(); // โหลดรายการใหม่หลังจากการลบ
      });
    }
  }
}
