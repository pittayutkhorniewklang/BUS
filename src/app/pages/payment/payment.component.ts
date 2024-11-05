import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  qrCodeData: string = '/assets/images/IMG_0344.jpg'; // กำหนดที่อยู่ของ QR Code

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/reservation']); // นำทางกลับไปที่หน้าจองตั๋ว
  }
}