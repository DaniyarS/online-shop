import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/shared/login/login.component';
import {SmartphoneListComponent} from './components/shopping-cart/smartphone-list/smartphone-list.component';
import {TabletListComponent} from './components/shopping-cart/tablet-list/tablet-list.component';
import {WatchListComponent} from './components/shopping-cart/watch-list/watch-list.component';
import {AccessoryListComponent} from './components/shopping-cart/accessory-list/accessory-list.component';
import {DetailsComponent} from './components/shopping-cart/details/details.component';
import {RegisterComponent} from './components/shared/register/register.component';
import {CartComponent} from './components/shopping-cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/smartphones', pathMatch: 'full'},
  { path: 'smartphones', component: SmartphoneListComponent},
  { path: 'tablets', component: TabletListComponent},
  { path: 'watches', component: WatchListComponent },
  { path: 'accessories', component: AccessoryListComponent},
  { path: 'login', component: LoginComponent },
  { path: ':id/:id', component: DetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
