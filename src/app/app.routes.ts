import { Routes } from '@angular/router';
import { ProductList } from './application/components/product-list/product-list';
import { ParkList } from './EXERCICE/components/park-list/park-list';
import { ParkSelected } from './EXERCICE/components/park-selected/park-selected';
import { Error } from './EXERCICE/components/error/error';

export const routes: Routes = [
  { path: 'products', title: 'Produits', component: ProductList },
  { path: 'parks', title: 'Parcs', component: ParkList },
  { path: 'parks/:id', title: 'Détail du parc', component: ParkSelected },
  { path: '', redirectTo: 'parks', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: Error },
];
