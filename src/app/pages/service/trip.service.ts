import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // นำเข้า HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private API_URL = 'http://localhost:3000'; // Base URL ของ backend

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลเส้นทางทั้งหมด
  getRoutes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/route`);
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
    return this.http.get<any[]>(`${this.API_URL}/trip`);
  }

  // จองที่นั่ง
  bookSeat(bookingData: any): Observable<any> {
    const token = localStorage.getItem('authToken'); // ดึง token จาก localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // ตั้งค่า headers

    return this.http.post<any>(`${this.API_URL}/booking/book`, bookingData, { headers }); // เพิ่ม headers ในคำขอ
  }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/reservations`);
  }

  updateReservation(id: number, reservation: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/reservations/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/reservations/${id}`);
}

}

