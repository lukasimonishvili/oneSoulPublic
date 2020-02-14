import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private hi: boolean = JSON.parse(window.localStorage.getItem("hi")) || false;
  private hiCount: number;
  private isNavigationOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.hiCount = 1;
  }

  sayHi() {
    if (!this.hi) {
      this.hiCount = this.hiCount + 1;
      window.localStorage.setItem("hi", JSON.stringify(true));
      this.hi = JSON.parse(window.localStorage.getItem("hi"));
    }
  }

  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }
}
