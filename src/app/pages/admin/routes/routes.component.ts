import { Component, OnInit } from '@angular/core';
import { TripService } from '../../service/trip.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class RoutesComponent implements OnInit {
  routes: any[] = [];
  newRoute = {
    start: '',
  end_point: '',
  ticket_price: 0,
  departure_time: '',
  arrival_time: '',
  available_seat: 0
  };

  constructor(private routeService: TripService) { }

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.routeService.getRoutes().subscribe(data => {
      this.routes = data;
    });
  }

  addRoute(): void {
    this.routeService.addRoute(this.newRoute).subscribe(() => {
      this.loadRoutes();
      this.newRoute = {
        start: '',
        end_point: '',
        ticket_price: 0,
        departure_time: '',
        arrival_time: '',
        available_seat: 0
      };
    });
  }

  deleteRoute(id: number): void {
    this.routeService.deleteRoute(id).subscribe(() => {
      this.loadRoutes();
    });
  }
}
