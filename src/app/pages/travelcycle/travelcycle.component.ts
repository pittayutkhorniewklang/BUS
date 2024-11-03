import { Component, OnInit } from '@angular/core';
import { TripService } from '../service/trip.service';
@Component({
  selector: 'app-travelcycle',
  templateUrl: './travelcycle.component.html',
  styleUrl: './travelcycle.component.css'
})
export class TravelcycleComponent implements OnInit{
  routes: any[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.tripService.getRoutes().subscribe(
      data => {
        this.routes = data;
        console.log('Routes loaded:', this.routes);
      },
      error => {
        console.error('Error loading routes:', error);
      }
    );
  }
}