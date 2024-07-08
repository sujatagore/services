import { Injectable } from '@angular/core';
import { Istd } from '../module/data.interface';
import { SnackBarMsgService } from './snack-bar-msg.service';

@Injectable({
  providedIn: 'root'
})
export class StdServiceService {

  StdArr : Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jD15@gmail.com',
      contact: 1215665331,
      id: '',
      gender : 'Male'
    },
    {
      fname: 'Jeny',
      lname: 'Doe',
      email: 'jD15@gmail.com',
      contact: 2134554541,
      id: '',
      gender : 'Female'
    }
  ]

  constructor(
    private _snackBarservices : SnackBarMsgService
  ) { }

  fetchAllStd(): Istd[] {
    //API call get data from database
    return this.StdArr
  }

  createNewStd(newStd : Istd){
    console.log(newStd)
    this.StdArr.push(newStd)
    this._snackBarservices.openSnackBar(`New Student is Added Successfully!!!`)
  }

  removeStd(id : string){
    let getStdRemove = this.StdArr.findIndex(s =>s.id === id);
    this.StdArr.splice(getStdRemove, 1);
    this._snackBarservices.openSnackBar(`Student is Removed Successfully!!!`)
  }

}
