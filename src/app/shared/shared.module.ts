import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, RatingComponent],
})
export class SharedModule {}
