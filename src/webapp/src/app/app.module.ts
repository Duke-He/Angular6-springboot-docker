import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/home/app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzDemoCarouselBasicComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NzDemoCarouselBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
