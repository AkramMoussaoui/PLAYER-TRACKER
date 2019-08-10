import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { ProfileComponent } from "../profile/profile.component";

export const routes: Routes = [
  { path: "profile/:platform/:id", component: ProfileComponent },
  { path: "search", component: AppComponent },
  { path: "", pathMatch: "full", redirectTo: "/search" }
];
