import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGender, Istd } from 'src/app/shared/module/data.interface';
import { SnackBarMsgService } from 'src/app/shared/service/snack-bar-msg.service';
import { StdServiceService } from 'src/app/shared/service/std-service.service';
import { UuidserviceService } from 'src/app/shared/service/uuidservice.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('logIn') logInRef !: NgForm

  gender : Array<IGender> = [
    {
        gen : 'Male',
        id : 1
    },

    {
        gen : 'Female',
        id : 2
    }
]

  constructor(
    private _stdService : StdServiceService,
    private _snackBarservices : SnackBarMsgService,
    private _UuidserviceService : UuidserviceService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if (this.logInRef.valid) {
      let std : Istd = {...this.logInRef.value, id:this._UuidserviceService.uuid()}
      console.log(std)
          this.logInRef.reset()
          this._stdService.createNewStd(std);
    }
  }

}
