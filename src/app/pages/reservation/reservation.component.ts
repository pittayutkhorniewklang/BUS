import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  seats = Array(20).fill({}).map((_, index) => ({ number: index + 1, selected: false }));
  selectedSeats: number[] = []; // เก็บหมายเลขที่นั่งที่ถูกเลือก

  toggleSeat(index: number) {
    this.seats[index].selected = !this.seats[index].selected;

    if (this.seats[index].selected) {
      this.selectedSeats.push(this.seats[index].number);
    } else {
      this.removeSeat(this.seats[index].number);
    }
  }

  removeSeat(seatNumber: number) {
    // ยกเลิกการเลือกที่นั่งและอัปเดตสถานะ
    this.seats[seatNumber - 1].selected = false;
    this.selectedSeats = this.selectedSeats.filter(seat => seat !== seatNumber);
  }

  confirmSelection() {
    alert('ที่นั่งที่คุณเลือก: ' + this.selectedSeats.join(', '));
  }
}
