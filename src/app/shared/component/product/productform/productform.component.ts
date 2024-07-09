import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, productstatus } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidserviceService } from 'src/app/shared/service/uuidservice.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  @ViewChild('productForm') productFormRef !: NgForm

  constructor(
    private _UuidserviceService : UuidserviceService,
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
  }

  onProductAdd(){
      if (this.productFormRef.valid) {
        // console.log(this.productFormRef.value);

        let NewProduct : Iproduct = {
          ...this.productFormRef.value,
          id: this._UuidserviceService.uuid(),
          productstatus: productstatus.InProgress
        }

        console.log(NewProduct);

        this.productFormRef.reset();
        this._productService.addNewProduct(NewProduct)
      }
  }

}
