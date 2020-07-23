import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "src/_model/product";
import { checkout, add } from "../store/cart.actions";
import { Cart } from "../store/cart.reducer";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "[app-item]",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  @Input() productInfo: IProduct;
  quantity = 0;
  imageWidth = 50;
  imageMargin = 2;
  cart$: Observable<number>;
  constructor(private store: Store<{ products: any; cart: Cart }>) {
    this.cart$ = store.pipe(select((state) => state.cart.count));
  }

  ngOnInit() {}

  addProduct(product): void {
    if (!(this.quantity == 0)) {
      product.qty = this.quantity;
      this.quantity = 0;
    }
    this.store.dispatch(add(product));
  }
}
