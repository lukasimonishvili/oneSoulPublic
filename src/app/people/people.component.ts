import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../angular-services/people/people.service";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  private people: any = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.fetchPeopleData();
  }

  fetchPeopleData() {
    this.peopleService.fetchPeopleData().subscribe(response => {
      this.people = response;
    });
  }
}
