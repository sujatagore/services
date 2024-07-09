import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passengercount',
  templateUrl: './passengercount.component.html',
  styleUrls: ['./passengercount.component.scss']
})
export class PassengercountComponent implements OnInit{

  @Input() getTotalCount !: number
  @Input() getCheckInCount !: number

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

}
