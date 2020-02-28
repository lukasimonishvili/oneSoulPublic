import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { WorksService } from "../../angular-services/works/works.service";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart
} from "@angular/router";

@Component({
  selector: "app-works-shared",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"]
})
export class WorksComponent implements OnInit, OnDestroy {
  @Input() theme: "dark" | "light";
  private works: any = [];
  private showErrorComponent: boolean = false;
  observable;

  constructor(
    private router: Router,
    private worksService: WorksService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchWorksData();
    this.observable = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (window.location.search.length) {
          this.fetchWorksByCategory(
            window.location.search.split("category=")[1]
          );
        } else {
          this.fetchAllWorks();
        }
      }
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

  fetchWorksData() {
    this.activatedRoute.queryParams.subscribe(route => {
      if (route["category"] !== undefined) {
        let id: any = route["category"];
        this.fetchWorksByCategory(id);
      } else {
        this.fetchAllWorks();
      }
    });
  }

  fetchAllWorks() {
    this.worksService.fetchWorksData().subscribe(response => {
      this.works = response;
    });
  }

  fetchWorksByCategory(id: any) {
    this.worksService.fetchWorksByCategoryId(id).subscribe(response => {
      if (typeof response["success"] == "boolean" && !response["success"]) {
        this.showErrorComponent = true;
      } else {
        this.works = response;
      }
    });
  }
}
