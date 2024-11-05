import { Component } from '@angular/core';
import { TripService } from '../../service/trip.service';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent {
  reservations: any[] = [];
  selectedReservation: any = {};
  isEditMode = false;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.loadReservations();
  }
  loadReservations() {
    this.tripService.getReservations().subscribe(
      (data: any) => {
        this.reservations = data;
        console.log('Reservations:', this.reservations); // Log เพื่อดูข้อมูลที่ได้
      },
      error => {
        console.error("Error fetching reservations:", error); // แสดงข้อผิดพลาดใน Console
      }
    );
  }

  deleteReservation(id: number) {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.tripService.deleteReservation(id).subscribe(() => {
        this.loadReservations(); // Reload reservations after deletion
      });
    }
  }

  openEdit(reservation: any) {
    this.selectedReservation = { ...reservation }; // Copy reservation data for editing
    this.isEditMode = true;
  }

  submitForm() {
    this.tripService.updateReservation(this.selectedReservation.id, this.selectedReservation).subscribe(() => {
      this.loadReservations(); // Reload reservations after update
      this.isEditMode = false; // Exit edit mode
    });
  }
}