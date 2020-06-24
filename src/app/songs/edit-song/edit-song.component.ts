import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "hm-edit-song",
  templateUrl: "./edit-song.component.html",
  styleUrls: ["./edit-song.component.scss"]
})
export class EditSongComponent implements OnInit {
  public songname: String;
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.songname = this.route.snapshot.paramMap.get("name");
  }
}
