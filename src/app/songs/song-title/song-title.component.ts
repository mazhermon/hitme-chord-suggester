import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "hm-song-title",
  templateUrl: "./song-title.component.html",
  styleUrls: ["./song-title.component.scss"]
})
export class SongTitleComponent implements OnInit {
  @Input()
  public songname: String;

  constructor() {}

  ngOnInit(): void {}
}
