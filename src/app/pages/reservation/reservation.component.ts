import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
confirmSelection() {
throw new Error('Method not implemented.');
}
 
 seats = Array(20).fill(null).map(() => ({ selected: false }));
 toggleSeat(index: number) {
  this.seats[index].selected = !this.seats[index].selected; // เปลี่ยนสถานะที่นั่ง

  confirmSelection() ;{
    const selectedSeats = this.seats
      .map((seat, index) => (seat.selected ? index + 1 : null))
      .filter(seat => seat !== null);
    
    if (selectedSeats.length > 0) {
      alert(`คุณเลือกที่นั่ง: ${selectedSeats.join(', ')}`);
    } else {
      alert('กรุณาเลือกที่นั่งก่อน!');
    }
  
}

  

   function confirmSelection() {
     throw new Error('Function not implemented.');
   }
  }
};
