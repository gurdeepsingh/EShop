import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Cart } from "../store/cart.reducer";
import { checkout, add } from "../store/cart.actions";
import { IProduct } from "src/_model/product";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  pageTitle: "eStore";
  products: IProduct[] = [];
  cart$: Observable<number>;

  quantity = 0;
  imageWidth = 50;
  imageMargin = 2;

  _listFilter = "";
  filteredProducts: IProduct[] = [];
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  constructor(private store: Store<{ products: any[]; cart: Cart }>) {
    store
      .pipe(select((state) => state.products))
      .subscribe((data) => (this.products = data));
    this.filteredProducts = this.products;
    this.cart$ = store.pipe(select((state) => state.cart.count));
  }

  goCart(): void {
    this.store.dispatch(checkout());
  }

  onQtyChange($event): void {
    this.quantity = $event.target.value;
  }
}
