import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
   private readonly productService = inject(ProductService);
  products = this.productService.products;

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
  }
  onAddProduct() {
  let newProduct = { id: "xyDSI", name: "crayon", price: 2.3 };
  this.productService.addProduct(newProduct)
      .subscribe(p => console.log(p));
}
}
