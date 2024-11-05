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
  recentUsers: any[] = [];

  constructor(private userService: UserService, private tripService: TripService) {}

  ngOnInit() {
    this.getUserCount();
    this.getBookingCount();
    this.getRouteCount();
    this.getTripCount();
    this.getRecentReservations();
    this.getRecentUsers();
  }

  getUserCount() {
    this.userService.getUsers().subscribe(users => {
      this.userCount = users.length;
    });
  }

  getBookingCount() {
    this.tripService.getReservations().subscribe(reservations => {
      this.bookingCount = reservations.length;
    });
  }

  getRouteCount() {
    this.tripService.getRoutes().subscribe(routes => {
      this.routeCount = routes.length;
    });
  }

  getTripCount() {
    this.tripService.getTripsFromApi().subscribe(trips => {
      this.tripCount = trips.length;
    });
  }

  getRecentReservations() {
    this.tripService.getReservations().subscribe(reservations => {
      this.recentReservations = reservations.slice(0, 5);
    });
  }

  getRecentUsers() {
    this.userService.getUsers().subscribe(users => {
      this.recentUsers = users.slice(0, 5);
    });
  }

  viewReservation(id: number) {
    // เพิ่มโค้ดสำหรับดูรายละเอียดการจอง
  }

  editReservation(id: number) {
    // เพิ่มโค้ดสำหรับแก้ไขการจอง
  }

  deleteReservation(id: number) {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.tripService.deleteReservation(id).subscribe(() => {
        this.getRecentReservations();
      });
    }
  }

  viewUser(id: number) {
    // เพิ่มโค้ดสำหรับดูรายละเอียดผู้ใช้
  }

  editUser(id: number) {
    // เพิ่มโค้ดสำหรับแก้ไขผู้ใช้
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.getRecentUsers();
      });
    }
  }
}
