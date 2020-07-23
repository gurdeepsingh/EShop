import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { add } from "../store/cart.actions";
import { Cart } from "../store/cart.reducer";
import { IProduct } from "src/_model/product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  pageTitle = "Product Detail";
  errorMessage = "";
  products: IProduct[] = [];
  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private store: Store<{ products: any[]; cart: Cart }>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    store
      .pipe(select((state) => state.products))
      .subscribe((data) => (this.products = data));
  }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.product = this.products.find((product) => product.productId == id);
  }
  onBack(): void {
    this.router.navigate(["/home"]);
  }
  onAddToBasketClicked(product): void {
    product.qty = this.quantity;
    this.store.dispatch(add(product));
  }
}
