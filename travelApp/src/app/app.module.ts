import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';

@NgModule({
  declarations: [		
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    FlightComponent,
    CarComponent,
      HotelComponent,
      BusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
