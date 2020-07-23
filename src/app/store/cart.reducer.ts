import { createReducer, on } from "@ngrx/store";

import { add, reset, checkout, remove } from "./cart.actions";
import { IProduct } from "src/_model/product";

export interface Cart {
  products: any[];
  count: number;
  salesTaxes: number;
  total: number;
}

export const initialState: Cart = {
  products: [],
  count: 0,
  salesTaxes: 0,
  total: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(add, (state, props: IProduct) => {
    const products = state.products.slice();
    let qtyCount = 0;
    if (products.length) {
      const index = products.findIndex(
        (item) => item.productId === props.productId
      );

      if (index >= 0) {
        products[index].qty = Number(products[index].qty) + Number(props.qty);
      } else {
        products.push(props);
      }
    } else {
      products.push(props);
    }
    return { ...state, count: state.count + Number(props.qty), products };
  }),
  on(reset, (state) => ({ ...state, count: 0, products: [] })),
  on(checkout, (state) => {
    const products = state.products.slice();
    let total = 0;
    let salesTaxes = 0;

    products.forEach((item) => {
      total = total + item.qty * item.price;
      //salesTaxes = salesTaxes + (item.qty * (item.salesTax + item.importTax));
    });

    return { ...state, salesTaxes, total };
  })
);
