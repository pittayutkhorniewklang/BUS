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
    selectedSeats: [] as number[]
  };

  fromOptions: string[] = [];
  toOptions: string[] = [];

  routes: any[] = []; // ตัวแปรเก็บข้อมูลเส้นทางที่ดึงมาจาก backend
  seats = Array(20).fill({}).map((_, index) => ({ number: index + 1, selected: false }));
  selectedSeats: number[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    // ดึงข้อมูลเส้นทางจาก backend
    this.tripService.getRoutes().subscribe(data => {
      this.routes = data;

      // กรองข้อมูลซ้ำออกเพื่อสร้างตัวเลือกสำหรับต้นทางและปลายทาง
      const uniqueFrom = [...new Set(this.routes.map(route => route.start))];
      const uniqueTo = [...new Set(this.routes.map(route => route.end_point))];

      this.fromOptions = uniqueFrom;
      this.toOptions = uniqueTo;
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
    this.bookingData.selectedSeats = this.selectedSeats;

    // ส่งข้อมูลไปยัง shared service หรือ backend ตามต้องการ
    alert('การจองของคุณถูกบันทึกแล้ว!');
  }
}
