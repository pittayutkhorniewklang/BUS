import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  
  private API_URL = 'http://localhost:3000/route'; // backend API URL
  private TRIP_URL = 'http://localhost:3000/trip'; // URL ใหม่สำหรับ trips
  private BOOK_URL = 'http://localhost:3000/booking';


  constructor(private http: HttpClient) { }

  getRoutes(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  getSeatsByTripId(tripId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/seats/${tripId}`);
  }

  getTrips(): Observable<any> {
    return this.http.get(`${this.API_URL}/trips`);
  }

  // เมธอดใหม่สำหรับดึงข้อมูลเที่ยวรถ
  getTripsFromApi(): Observable<any> {
    return this.http.get(`${this.TRIP_URL}`); // ใช้ URL ใหม่
  }

  bookSeat(bookingData: any): Observable<any> {
    return this.http.post(`${this.BOOK_URL}/book`, bookingData); // ใช้ URL สำหรับการจอง
  }
  
}

