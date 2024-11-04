// reservation.component.ts
import { Component, OnInit } from '@angular/core';
import { TripService } from '../service/trip.service';

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
    trip_id:0
  };

  fromOptions: string[] = [];
  toOptions: string[] = [];
  routes: any[] = [];
  trips: any[] = []; // เพิ่มตัวแปร trips เพื่อใช้เก็บข้อมูลเที่ยวรถ
  seats = Array(20).fill({}).map((_, index) => ({ number: index + 1, selected: false }));
  selectedSeats: number[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    // โหลดข้อมูลเส้นทางจาก API และตั้งค่า "ต้นทาง" และ "ปลายทาง"
    this.tripService.getRoutes().subscribe(data => {
        this.routes = data;

        // กำหนดค่า "ต้นทาง" และ "ปลายทาง" ที่ไม่ซ้ำกัน
        const uniqueFrom = [...new Set(this.routes.map(route => route.start))];
        const uniqueTo = [...new Set(this.routes.map(route => route.end_point))];

        this.fromOptions = uniqueFrom;
        this.toOptions = uniqueTo;

        // Log เพื่อการตรวจสอบข้อมูล
        console.log('Routes data:', this.routes); // ตรวจสอบข้อมูล routes
        console.log('From options:', this.fromOptions); // ตรวจสอบข้อมูล fromOptions
        console.log('To options:', this.toOptions); // ตรวจสอบข้อมูล toOptions
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

        // Log เพื่อการตรวจสอบข้อมูล
        console.log('Trips data:', this.trips); // ตรวจสอบข้อมูล trips
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

    // เปรียบเทียบ time กับ id ของ trip (ควรจะเป็น id ที่ส่งมาจาก dropdown)
    const selectedTrip = this.trips.find(trip => trip.id == this.bookingData.time);
    
    if (!selectedTrip) {
        alert('ไม่พบเที่ยวเดินทางที่เลือก');
        return;
    }

    this.bookingData.selectedSeats = this.selectedSeats;
    this.bookingData.user_id = 1; // หรือใส่ user_id จริงที่ได้จากระบบ
    this.bookingData.trip_id = selectedTrip.id;

    this.tripService.bookSeat(this.bookingData).subscribe(response => {
        alert('การจองของคุณถูกบันทึกแล้ว!');
    }, error => {
        console.error("Booking error:", error); // แสดงข้อผิดพลาดใน Console
        alert('เกิดข้อผิดพลาดในการจอง!');
    });
}


}