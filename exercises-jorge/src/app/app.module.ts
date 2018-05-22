import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { Day2Exercise1Component } from './day2-exercise1/day2-exercise1.component';
import { Day2Exercise2Component } from './day2-exercise2/day2-exercise2.component';
import { Day2Exercise3Component } from './day2-exercise3/day2-exercise3.component';
import { Day2Exercise4Component } from './day2-exercise4/day2-exercise4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    Day2Exercise1Component,
    Day2Exercise2Component,
    Day2Exercise3Component,
    Day2Exercise4Component
  ],
  imports: [
    routes,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
