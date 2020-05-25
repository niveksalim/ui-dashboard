import { Component, OnInit } from "@angular/core";
import { SideMenuService } from "./stores/side-menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isOpen$;

  constructor(private sideMenuService: SideMenuService) {
    this.isOpen$ = this.sideMenuService.isOpen$;
  }

  ngOnInit(): void {}

  openMenu(): void {
    this.sideMenuService.open();
  }
}
