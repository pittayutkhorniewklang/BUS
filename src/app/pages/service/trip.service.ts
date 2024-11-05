import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  
  private API_URL = 'http://localhost:3000'; // Base URL ของ backend
  
  constructor(private http: HttpClient) { }

  // ดึงข้อมูลเส้นทางทั้งหมด
  getRoutes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/route`); // ใช้ endpoint ที่ตรงกับ backend
  }

  // ดึงข้อมูลที่นั่งตาม tripId
  getSeatsByTripId(tripId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/seats/${tripId}`);
  }

  // ดึงข้อมูลเที่ยวรถทั้งหมด
  getTrips(): Observable<any> {
    return this.http.get<any[]>(`${this.API_URL}/trip`);
  }

  // เพิ่มเส้นทางใหม่
  addRoute(route: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/route`, route);
  }
  
  // ลบข้อมูลเที่ยวรถ
  deleteTrip(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/trip/${id}`);
  }

  // ดึงข้อมูลเที่ยวรถจาก API
  getTripsFromApi(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/trip`); // ใช้ endpoint เดียวกันกับ getTrips
  }

  // จองที่นั่ง
  bookSeat(bookingData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/booking/book`, bookingData);// ใช้ endpoint booking
  }
}
