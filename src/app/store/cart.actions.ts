import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/_model/product";

export const add = createAction(
  "[Product Component] Add Product",
  props<IProduct>()
);
export const reset = createAction("[Cart Component] Complete");
export const checkout = createAction("[Main Component] Checkout");
export const remove = createAction(
  "[Cart Component] Remove Product",
  props<IProduct>()
);
