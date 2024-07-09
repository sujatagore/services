import { Injectable } from '@angular/core';
import { IPassenger } from '../module/data.interface';
import { SnackBarMsgService } from './snack-bar-msg.service';

@Injectable({
  providedIn: 'root'
})
export class AirlinePassengersService {

  passengerArray : Array<IPassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];

  constructor(
    private _snackBarservices : SnackBarMsgService
  ) { }

  fetchAllPassenger(): Array<IPassenger> {
    return this.passengerArray
  }

  updatePassInfo(updPassObj : IPassenger){
      let getUpdIndex = this.passengerArray.findIndex(p => p.id === updPassObj.id);
      let oldObj = this.passengerArray[getUpdIndex] = updPassObj
      this._snackBarservices.openSnackBar(`The Passenger Name ${oldObj.fullname} is Updated to ${updPassObj.fullname} Updated Successfully!!!!!`)
  }

  removePassInfo(removePassObj : IPassenger){
    let getRemoveIndex = this.passengerArray.findIndex(p => p.id === removePassObj.id);
    this.passengerArray.splice(getRemoveIndex, 1);
    this._snackBarservices.openSnackBar(`The Passenger ${removePassObj.fullname} is Removed Successfully!!!`)
  }
}
