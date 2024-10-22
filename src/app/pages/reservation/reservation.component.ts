import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  bookingData = {
    name: '', // เพิ่มบรรทัดนี้
    from: '',
    to: '',
    time: '',
    date: '',
    selectedSeats: [] as number[]
  };

  seats = Array(20).fill({}).map((_, index) => ({ number: index + 1, selected: false }));
  selectedSeats: number[] = [];

  constructor(private sharedService: SharedService) {}

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

    // ส่งข้อมูลไปยัง shared service
    this.sharedService.setReservationData(this.bookingData);
    alert('การจองของคุณถูกบันทึกแล้ว!');
  }
}
