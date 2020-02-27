import { Component, OnInit, Input } from "@angular/core";
import { WorksService } from "../../angular-services/works/works.service";

@Component({
  selector: "app-works-shared",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"]
})
export class WorksComponent implements OnInit {
  @Input() theme: "dark" | "light";
  private works: any = [];

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.fetchWorksData();
  }

  fetchWorksData() {
    this.worksService.fetchWorksData().subscribe(response => {
      this.works = response;
    });
  }
}
