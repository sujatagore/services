import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productstatus } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  // ProductArr !: Array<Iproduct>

  @Input() productObj !: Iproduct

  productStatusEnum = productstatus;

  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    // this.ProductArr = this._productService.fetchAllProduct()
  }

  onStatusUpdate(status : productstatus){
    this.productObj.productstatus = status
    this._productService.updateStatus(this.productObj)
  }

  // onProductInPro(){
  //   this.productObj.productstatus = productstatus.InProgress
  //   this._productService.updateStatus(this.productObj)
  // }

  // onProductDeli(){
  //   this.productObj.productstatus = productstatus.Delivered
  //   this._productService.updateStatus(this.productObj)
  // }

  // onProductDis(){
  //   this.productObj.productstatus = productstatus.Dispatched
  //   this._productService.updateStatus(this.productObj)
  // }

}
