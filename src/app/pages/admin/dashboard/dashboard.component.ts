import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stats = [
    { title: 'Total Bookings', value: 1234 },
    { title: 'Registered Users', value: 789 },
    { title: 'Total Revenue', value: '฿1,234,567' } // คงเหลือแค่ Total Revenue
];


  constructor() { }

  ngOnInit(): void {
    // Load additional data here if needed
  }

}
