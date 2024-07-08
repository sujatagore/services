import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarMsgService {

  constructor(
    private _MatSnackBar : MatSnackBar
  ) { }

  openSnackBar(msg : string) {
    this._MatSnackBar.open(msg, "Close",{
      duration : 2500,
      verticalPosition : "top",
      horizontalPosition : 'center'
    });
  }
}
