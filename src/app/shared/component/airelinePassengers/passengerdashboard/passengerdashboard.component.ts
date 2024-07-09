import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPassenger } from 'src/app/shared/module/data.interface';
import { AirlinePassengersService } from 'src/app/shared/service/airline-passengers.service';

@Component({
  selector: 'app-passengerdashboard',
  templateUrl: './passengerdashboard.component.html',
  styleUrls: ['./passengerdashboard.component.scss']
})
export class PassengerdashboardComponent implements OnInit {

  passengerArray !: Array<IPassenger>

  totalCount !: number
  checkInCount !: number  
  constructor(
    private _AirlinePassengersService : AirlinePassengersService
  ) { }

  ngOnInit(): void {
    this.passengerArray = this._AirlinePassengersService.fetchAllPassenger()
    this.getCount()
  }

  getCount(){
    this.totalCount = this.passengerArray.length
    this.checkInCount = this.passengerArray.filter(p => p.checkedIn).length
  }

  // onPassenger(){
  //   this.getCount()
  // }

  


}
