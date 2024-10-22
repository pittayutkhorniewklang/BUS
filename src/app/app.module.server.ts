import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  // ไม่ต้องประกาศ AppComponent ที่นี่
  bootstrap: [AppComponent],
})
export class AppServerModule {}
