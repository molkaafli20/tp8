import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  private readonly productService = inject(ProductService);
  products = this.productService.products;

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
  }

  onAddProduct() {
    let newProduct = { name: "crayon", price: 2.3 };
    this.productService.addProduct(newProduct).subscribe(
      productAdded => console.log(productAdded)
    );
  }
}
