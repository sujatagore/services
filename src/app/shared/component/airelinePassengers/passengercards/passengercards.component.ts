import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IPassenger } from 'src/app/shared/module/data.interface';
import { AirlinePassengersService } from 'src/app/shared/service/airline-passengers.service';

@Component({
  selector: 'app-passengercards',
  templateUrl: './passengercards.component.html',
  styleUrls: ['./passengercards.component.scss']
})
export class PassengercardsComponent implements OnInit{

  @Input() passObj !: IPassenger

  isInEditMode : boolean = false;

  @Output() emitPassenger : EventEmitter<boolean> = new EventEmitter<boolean>()
  
  constructor(
    private _AirlinePassengersService : AirlinePassengersService
  ) { }
  
  ngOnInit(): void {
  }

  onUpdate(udtObjName : HTMLInputElement){
    this.passObj = {...this.passObj, fullname : udtObjName.value}
    this._AirlinePassengersService.updatePassInfo(this.passObj)
  }

  onDelete(){
      this._AirlinePassengersService.removePassInfo(this.passObj)
      this.emitPassenger.emit(true)
  }

  // ngOnChanges(changes: SimpleChanges): void {
    
  // }

}
