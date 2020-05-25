import { Component, OnInit } from "@angular/core";
import { SideMenuService } from "../../stores/side-menu.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  isOpen$;

  constructor(private sideMenuService: SideMenuService) {
    this.isOpen$ = this.sideMenuService.isOpen$;
  }

  ngOnInit() {}

  closeMenu(): void {
    this.sideMenuService.close();
  }
}
