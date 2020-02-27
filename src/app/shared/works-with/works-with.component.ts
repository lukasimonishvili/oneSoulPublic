import { Component, OnInit } from "@angular/core";
import { WorksService } from "../../angular-services/works/works.service";

@Component({
  selector: "app-works-with",
  templateUrl: "./works-with.component.html",
  styleUrls: ["./works-with.component.scss"]
})
export class WorksWithComponent implements OnInit {
  private logos: any = [];

  constructor(private worksSrvice: WorksService) {}

  ngOnInit() {
    this.fetchWorksWithdata();
  }

  fetchWorksWithdata() {
    this.worksSrvice.fetchWorksWitchData().subscribe(response => {
      this.logos = response;
    });
  }
}
