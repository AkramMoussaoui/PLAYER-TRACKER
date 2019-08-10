import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routes } from "./services/routes";
import { RouterComponent } from "./router/router.component";

@NgModule({
  declarations: [AppComponent, ProfileComponent, RouterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RouterComponent]
})
export class AppModule {}
