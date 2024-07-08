import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/shared/module/data.interface';
import { StdServiceService } from 'src/app/shared/service/std-service.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

 StdArr !: Array<Istd>

  constructor(
    private _stdService : StdServiceService
  ) { }

  ngOnInit(): void {
    this.StdArr = this._stdService.fetchAllStd()
  }

  onRemove(id : string){
    this._stdService.removeStd(id)
  }

}
