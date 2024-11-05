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
  available_seats: 0
  };

  constructor(private routeService: TripService) { }

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.routeService.getRoutes().subscribe(data => {
      console.log('Routes:', data);
      this.routes = data;
      console.log(this.routes);
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
        available_seats: 0
      };
    });
  }

  deleteTrip(id: number): void {
    console.log('Deleting Trip ID:', id);
    this.routeService.deleteTrip(id).subscribe(() => {
      this.loadRoutes();
    });
  }
  
  
  
}
