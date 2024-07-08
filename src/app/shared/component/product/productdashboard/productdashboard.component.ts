import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {

  ProductArr !: Array<Iproduct>

  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.ProductArr = this._productService.fetchAllProduct()
  }

}
