import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HitmeModule } from "../hitme/hitme.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HitmeModule],
  exports: [HomeComponent]
})
export class HomeModule {}
