import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newPlayer: FormGroup;
  platform: FormControl;
  playerId: FormControl;

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.body.className = "body-bg-image";
    this.platform = new FormControl("", Validators.required);
    this.playerId = new FormControl("", Validators.required);
    this.newPlayer = new FormGroup({
      platform: this.platform,
      playerId: this.playerId
    });
  }

  searchPlayer(values) {
    this.router.navigate([`/profile/${values.platform}/${values.playerId}`]);
  }
}
