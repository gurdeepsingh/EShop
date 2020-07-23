import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { Cart } from "../store/cart.reducer";
import { reset } from "../store/cart.actions";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  pageTitle = "Product List";
  products$: Observable<any[]>;
  count$: Observable<number>;
  salesTaxes$: Observable<number>;
  total$: Observable<number>;

  constructor(private store: Store<{ products: any[]; cart: Cart }>) {
    this.products$ = store.pipe(select((state) => state.cart.products));
    this.count$ = store.pipe(select((state) => state.cart.count));
    this.total$ = store.pipe(select((state) => state.cart.total));
  }

  resetStore() {
    this.store.dispatch(reset());
  }
  remove(product) {}
}
