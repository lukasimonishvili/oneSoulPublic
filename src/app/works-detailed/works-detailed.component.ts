import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WorksService } from "../angular-services/works/works.service";

@Component({
  selector: "app-works-detailed",
  templateUrl: "./works-detailed.component.html",
  styleUrls: ["./works-detailed.component.scss"],
})
export class WorksDetailedComponent implements OnInit {
  private id: string;
  private project: any = {
    next: 0,
    description: "",
    data: [],
    category: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private worksService: WorksService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route) => {
      this.id = route["params"].id;
      this.worksService.fetchWorkById(this.id).subscribe((response) => {
        this.project = response;
      });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
}
