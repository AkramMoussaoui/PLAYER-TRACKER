import { Component, OnInit } from "@angular/core";
import { PlayerDataService } from "../services/player-data.service";
import { ActivatedRoute } from "@angular/router";
import { IData } from "src/player.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private player: PlayerDataService,
    private route: ActivatedRoute
  ) {}
  profileData: IData;
  error: string;
  loading: boolean = true;

  ngOnInit() {
    document.body.className = "body-bg-no-image";
    this.player
      .getPlayerData(
        this.route.snapshot.params["platform"],
        this.route.snapshot.params["id"]
      )
      .subscribe(
        data => {
          this.loading = false;
          this.profileData = data.data;
        },
        err => {
          this.loading = false;
          this.error = err.error.message;
        }
      );
  }
}
