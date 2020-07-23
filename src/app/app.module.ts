import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./store/products.reducer";
import { cartReducer } from "./store/cart.reducer";
import { MainComponent } from "./main/main.component";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { SharedModule } from "./shared/shared.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, MainComponent, CartComponent, ItemComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: MainComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "nome", pathMatch: "full" },
      {
        path: "cart",
        component: CartComponent,
      },
      {
        path: "product/:id",
        component: ProductComponent,
      },
    ]),
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    SharedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
