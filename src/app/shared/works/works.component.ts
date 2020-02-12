import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-works-shared",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"]
})
export class WorksComponent implements OnInit {
  private works: Array<any> = [
    {
      id: 1,
      title: "Chai-khana website redesign and development",
      resolution: "large",
      image: "../../../assets/img/works-1.png"
    },
    {
      id: 2,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-2.png"
    },
    {
      id: 3,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-3.png"
    },
    {
      id: 4,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-4.png"
    },
    {
      id: 5,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-5.png"
    },
    {
      id: 6,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-2.png"
    },
    {
      id: 7,
      title: "Chai-khana website redesign and development",
      resolution: "large",
      image: "../../../assets/img/works-1.png"
    },
    {
      id: 8,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-3.png"
    },
    {
      id: 9,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-4.png"
    },
    {
      id: 10,
      title: "Birds of Prey",
      resolution: "small",
      image: "../../../assets/img/works-5.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
