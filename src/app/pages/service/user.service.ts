import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:3000/api'; // เปลี่ยน URL ตามที่ใช้

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลผู้ใช้ทั้งหมด
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/users-with-bookings`);
  }

  // ลบผู้ใช้
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${id}`);
  }

  getUserCount(): Observable<number> {
    return this.http.get<any[]>(this.API_URL).pipe(
      map(users => users.length) // นับจำนวนผู้ใช้
    );
  }

}
