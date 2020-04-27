import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/shared/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CategoryListComponent} from './components/shopping-cart/product-list/category-list/category-list.component';
// import {ProductListComponent} from './components/shopping-cart/product-list/product-list.component';
import {ProductItemComponent} from './components/shopping-cart/product-list/product-item/product-item.component';
import {AccessoriesComponent} from './components/shopping-cart/product-list/accessories/accessories.component';


const routes: Routes = [
<<<<<<< Updated upstream
=======
  { path: '', redirectTo: '/Smartphones', pathMatch: 'full'},
  { path: 'Smartphones', component: SmartphoneListComponent},
  { path: 'Phones', component: SmartphoneListComponent},
  { path: 'Tablets', component: TabletListComponent},
  { path: 'Watches', component: WatchListComponent },
  { path: 'Accessories', component: AccessoryListComponent},
>>>>>>> Stashed changes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: CategoryListComponent},
  // { path: 'categories/:id', component: ProductListComponent},
  { path: 'products/:id', component: ProductItemComponent},
  { path: 'categories/1', component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
