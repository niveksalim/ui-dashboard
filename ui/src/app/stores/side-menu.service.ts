import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SideMenuService {
  isOpen$ = new Subject<boolean>();

  constructor() {}

  open(): void {
    this.isOpen$.next(true);
  }

  close(): void {
    this.isOpen$.next(false);
  }
}
