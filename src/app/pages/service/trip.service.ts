import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private API_URL = 'http://localhost:3000/route/routes'; // backend API URL

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  getSeatsByTripId(tripId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/seats/${tripId}`);
  }
}
