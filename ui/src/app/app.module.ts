import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OverviewComponent } from "./dashboard/overview/overview.component";
import { SideNavComponent } from "./menu/side-nav/side-nav.component";

@NgModule({
  declarations: [AppComponent, SideNavComponent, OverviewComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
