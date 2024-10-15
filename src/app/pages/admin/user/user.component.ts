import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    { name: 'สมชาย ใจดี', email: 'somchai@example.com', phone: '0812345678', status: 'Active' },
    { name: 'สมหญิง สวยงาม', email: 'somying@example.com', phone: '0891234567', status: 'Inactive' }
  ];
  
  showAddUserForm = false;
  isEditMode = false;
  currentUser = { name: '', email: '', phone: '', status: 'Active' };
  editingUserIndex: number | null = null;

  // ฟังก์ชันเพิ่มหรือแก้ไขผู้ใช้
  saveUser() {
    if (this.isEditMode && this.editingUserIndex !== null) {
      this.users[this.editingUserIndex] = { ...this.currentUser };
      console.log('แก้ไขผู้ใช้:', this.currentUser);
    } else {
      this.users.push({ ...this.currentUser });
      console.log('เพิ่มผู้ใช้ใหม่:', this.currentUser);
    }

    this.resetForm();
  }

  // ฟังก์ชันสำหรับแก้ไขผู้ใช้
  editUser(user: any) {
    this.showAddUserForm = true;
    this.isEditMode = true;
    this.editingUserIndex = this.users.indexOf(user);
    this.currentUser = { ...user };
  }

  // ฟังก์ชันสำหรับลบผู้ใช้
  deleteUser(user: any) {
    const confirmDelete = confirm(`คุณต้องการลบผู้ใช้: ${user.name} หรือไม่?`);
    if (confirmDelete) {
      this.users = this.users.filter(u => u !== user);
      console.log('ลบผู้ใช้เรียบร้อยแล้ว:', user);
    }
  }

  // ฟังก์ชันสำหรับยกเลิกการเพิ่มหรือแก้ไข
  cancel() {
    this.resetForm();
  }

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  resetForm() {
    this.showAddUserForm = false;
    this.isEditMode = false;
    this.editingUserIndex = null;
    this.currentUser = { name: '', email: '', phone: '', status: 'Active' };
  }
}
