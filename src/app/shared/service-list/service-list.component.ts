import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"]
})
export class ServiceListComponent implements OnInit {
  private services: Array<any> = [
    {
      title: "DESIGN",
      features: [
        "Product design",
        "UX Design",
        "UI Design",
        "Digital Branding"
      ],
      button: "LEARN MORE",
      colors: {
        background: "rgba(255, 157, 0, 0.2)",
        text: "#000000"
      }
    },
    {
      title: "TECH",
      features: [
        "Web development",
        "Mobile development",
        "Serverside infrastructure",
        "Software development"
      ],
      button: "LEARN MORE",
      colors: {
        background: "rgba(0,127,255, 0.2)",
        text: "#000000"
      }
    },
    {
      title: "CREATIVE",
      features: [
        "Creative Campings",
        "Video production",
        "Motion graphics",
        "Documentary filming"
      ],
      button: "EXPLORE PROJECTS",
      colors: {
        background: "rgba(0,255,137, 0.2)",
        text: "#000000"
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
