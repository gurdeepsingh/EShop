import { MergeMapSubscriber } from "rxjs/internal/operators/mergeMap";

export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  qty: number;
}
