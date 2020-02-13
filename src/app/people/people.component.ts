import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  private people: Array<any> = [
    {
      image: "../../assets/img/people-1.png",
      fullName: "Beka Kvartskhava",
      position: "Founder & Creative Director"
    },
    {
      image: "../../assets/img/people-2.png",
      fullName: "Gigi Murisudze",
      position: "CEO"
    },
    {
      image: "../../assets/img/people-3.png",
      fullName: "Lisa Saliza",
      position: "Client Support"
    },
    {
      image: "../../assets/img/people-4.png",
      fullName: "Beka Kvartskhava",
      position: "Founder & Creative Director"
    },
    {
      image: "../../assets/img/people-5.png",
      fullName: "Gigi Murisudze",
      position: "CEO"
    },
    {
      image: "../../assets/img/people-6.png",
      fullName: "Lisa Saliza",
      position: "Client Support"
    },
    {
      image: "../../assets/img/people-1.png",
      fullName: "Beka Kvartskhava",
      position: "Founder & Creative Director"
    },
    {
      image: "../../assets/img/people-2.png",
      fullName: "Gigi Murisudze",
      position: "CEO"
    },
    {
      image: "../../assets/img/people-3.png",
      fullName: "Lisa Saliza",
      position: "Client Support"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
