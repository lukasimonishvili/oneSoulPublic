import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {
  trigger,
  transition,
  group,
  query,
  style,
  animate
} from "@angular/animations";

import { SeoService } from "./angular-services/seo/seo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("routeAnimation", [
      transition(
        "1 <=> 2, 1 <=> 3, 2 <=> 3, 3 => 3, 1 <=> 4, 2 <=> 4, 3 <=> 4, 1 <=> 5, 2 <=> 5, 3 <=> 5, 4 <=> 5, 1 <=> 6, 2 <=> 6, 3 <=> 6, 4 <=> 6, 5 <=> 6",
        [
          style({ height: "!" }),
          query(":enter", style({ opacity: "0" })),
          group([
            query(":leave", [animate("0s", style({ opacity: "0" }))]),
            query(":enter", [animate("0.5s", style({ opacity: "1" }))])
          ])
        ]
      )
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private seoService: SeoService) {}

  getDepth(outlet) {
    return outlet.activatedRouteData["depth"];
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let url: any = "onesoul.io" + window.location.pathname;
        if (url == "onesoul.io/") {
          url = "onesoul.io";
        }

        let head = document.getElementsByTagName("head")[0] as HTMLElement;
        let metas = document.getElementsByTagName("meta");

        this.seoService.getSeoData(url).subscribe(response => {
          if (response["success"]) {
            for (let i = 3; i < metas.length; i++) {
              let element = metas[i];
              head.removeChild(element);
            }

            for (let key of Object.keys(response["property"])) {
              let newMeta = document.createElement("meta");
              newMeta.setAttribute("property", key);
              newMeta.setAttribute("content", response["property"][key]);
              head.appendChild(newMeta);
            }

            for (let key of Object.keys(response["name"])) {
              let newMeta = document.createElement("meta");
              newMeta.setAttribute("name", key);
              newMeta.setAttribute("content", response["name"][key]);
              head.appendChild(newMeta);
            }
          }
        });
      }
    });
  }
}
