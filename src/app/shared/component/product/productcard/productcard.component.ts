import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  // ProductArr !: Array<Iproduct>

  @Input() productObj !: Iproduct

  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    // this.ProductArr = this._productService.fetchAllProduct()
  }

}
