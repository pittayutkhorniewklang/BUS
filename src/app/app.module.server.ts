import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // component อื่น ๆ ที่ใช้ในโปรเจคนี้
  ],
  imports: [
    BrowserModule,
    // module อื่น ๆ ที่ใช้งาน
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
