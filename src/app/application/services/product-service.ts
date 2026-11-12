import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Product } from '../produit';
import { Observable, tap } from 'rxjs';

const URL = 'http://localhost:3000/products';
@Service()
export class ProductService {
    private readonly _http = inject(HttpClient);       

  private readonly _products = signal<Product[]>([]); 
  products = this._products.asReadonly();             

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(URL)
      .pipe(tap((allProducts: Product[]) => this._products.set(allProducts)));
  }
  addProduct(p: Product): Observable<Product> {
  return this._http.post<Product>(URL, p).pipe(
    tap(productAdded =>
      this._products.update(produits => [...produits, productAdded]))
  );
}
}

