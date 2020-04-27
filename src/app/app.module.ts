import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NavComponent} from './components/shared/nav/nav.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {CategoriesComponent} from './components/shopping-cart/categories/categories.component';
import {CartComponent} from './components/shopping-cart/cart/cart.component';
import {ProductListComponent} from './components/shopping-cart/product-list/product-list.component';
import {CartItemComponent} from './components/shopping-cart/cart/cart-item/cart-item.component';
import {ProductItemComponent} from './components/shopping-cart/product-list/product-item/product-item.component';
import {LoginComponent} from './components/shared/login/login.component';
import {FormsModule} from '@angular/forms';
<<<<<<< Updated upstream
import {RegisterComponent} from './components/register/register.component';
import { CategoryListComponent } from './components/shopping-cart/product-list/category-list/category-list.component';
import { AccessoriesComponent } from './components/shopping-cart/product-list/accessories/accessories.component';
=======
import {CategoryListComponent} from './components/shopping-cart/category-list/category-list.component';
import {SmartphoneListComponent} from './components/shopping-cart/smartphone-list/smartphone-list.component';
import {TabletListComponent} from './components/shopping-cart/tablet-list/tablet-list.component';
import {WatchListComponent} from './components/shopping-cart/watch-list/watch-list.component';
import {AccessoryListComponent} from './components/shopping-cart/accessory-list/accessory-list.component';
import {ProductListComponent} from './components/shopping-cart/product-list/product-list.component';
import {ProductItemComponent} from './components/shopping-cart/product-list/product-item/product-item.component';
import {RegisterComponent} from './components/shared/register/register.component';
import {DetailsComponent} from './components/shopping-cart/details/details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    CategoriesComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    AccessoriesComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

<<<<<<< Updated upstream
=======
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
>>>>>>> Stashed changes
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
