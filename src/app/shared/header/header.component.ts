import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../../angular-services/header/header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private hi: boolean = JSON.parse(window.localStorage.getItem("hi")) || false;
  private hiCount: any = 0;
  private socials: any = {
    facebook: "",
    instagram: "",
    vimeo: ""
  };
  private isNavigationOpen: boolean = false;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.fetchHeaderData();
  }

  fetchHeaderData() {
    this.headerService.fetchHeaderData().subscribe(response => {
      this.hiCount = response["hi"].value;
      this.socials = response["socials"];
    });
  }

  sayHi() {
    if (!this.hi) {
      this.headerService.sayHi().subscribe(response => {
        window.localStorage.setItem("hi", JSON.stringify(true));
        this.hi = true;
        this.hiCount = response;
      });
    }
  }

  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }
}
