import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-works-with",
  templateUrl: "./works-with.component.html",
  styleUrls: ["./works-with.component.scss"]
})
export class WorksWithComponent implements OnInit {
  private logos: Array<any> = [
    { image: "../../../assets/img/logo-1.png" },
    { image: "../../../assets/img/logo-2.png" },
    { image: "../../../assets/img/logo-3.png" },
    { image: "../../../assets/img/logo-4.png" },
    { image: "../../../assets/img/logo-5.png" },
    { image: "../../../assets/img/logo-3.png" },
    { image: "../../../assets/img/logo-5.png" },
    { image: "../../../assets/img/logo-4.png" },
    { image: "../../../assets/img/logo-2.png" },
    { image: "../../../assets/img/logo-1.png" }
  ];

  constructor() {}

  ngOnInit() {}
}
