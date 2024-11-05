import { Component, OnInit } from '@angular/core';
import { TripService } from '../service/trip.service';
import { Router } from '@angular/router'; // Import Router เพื่อการนำทาง

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  bookingData = {
    name: '',
    from: '',
    to: '',
    time: '',
    date: '',
    user_id: 0,
    selectedSeats: [] as number[],
    trip_id: 0
  };

  fromOptions: string[] = [];
  toOptions: string[] = [];
  routes: any[] = [];
  trips: any[] = [];
  seats = Array(20).fill({}).map((_, index) => ({ number: index + 1, selected: false }));
  selectedSeats: number[] = [];

  constructor(private tripService: TripService, private router: Router) {} // Inject Router

  ngOnInit() {
    // โหลดข้อมูลเส้นทางจาก API และตั้งค่า "ต้นทาง" และ "ปลายทาง"
    this.tripService.getRoutes().subscribe(data => {
      this.routes = data;
      const uniqueFrom = [...new Set(this.routes.map(route => route.start))];
      const uniqueTo = [...new Set(this.routes.map(route => route.end_point))];

      this.fromOptions = uniqueFrom;
      this.toOptions = uniqueTo;
    });

    // โหลดข้อมูลเที่ยวรถจาก API
    this.tripService.getTripsFromApi().subscribe(data => {
      this.trips = data.map((trip: any) => ({
        id: trip.id,
        displayTime: new Date(trip.departure_time).toLocaleTimeString('th-TH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      }));
    });
  }

  toggleSeat(index: number) {
    this.seats[index].selected = !this.seats[index].selected;

    if (this.seats[index].selected) {
      this.selectedSeats.push(this.seats[index].number);
    } else {
      this.removeSeat(this.seats[index].number);
    }
  }

  removeSeat(seatNumber: number) {
    this.seats[seatNumber - 1].selected = false;
    this.selectedSeats = this.selectedSeats.filter(seat => seat !== seatNumber);
  }

  confirmSelection() {
    console.log('Selected time:', this.bookingData.time);
    console.log('Available trips:', this.trips);

    if (!this.bookingData.time) {
        alert('กรุณาเลือกเวลาเดินทาง');
        return;
    }

    const selectedTrip = this.trips.find(trip => trip.id == this.bookingData.time);
    
    if (!selectedTrip) {
        alert('ไม่พบเที่ยวเดินทางที่เลือก');
        return;
    }

    // จัดเก็บข้อมูลการจองลงใน localStorage (ถ้าจำเป็น)
    this.bookingData.selectedSeats = this.selectedSeats;
    
    // ดึง user_id จาก localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.bookingData.user_id = user.id || 1; // ตั้งค่า user_id

    this.bookingData.trip_id = selectedTrip.id;

    // นำทางไปยังหน้าชำระเงินโดยตรง
    this.router.navigate(['/payment']); // ตรวจสอบให้แน่ใจว่าได้ import Router
}


}


