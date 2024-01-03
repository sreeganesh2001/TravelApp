import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'flight',component:FlightComponent},
  {path:'car',component:CarComponent},
  {path:'bus',component:BusComponent},
  {path:'hotel',component:HotelComponent},
  {path:'employee',component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
