import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  {
    path: "songs",
    loadChildren: () =>
      import("./songs/song-list/song-list.module").then(
        mod => mod.SongListModule
      )
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
