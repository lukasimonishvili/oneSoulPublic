import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-works-detailed",
  templateUrl: "./works-detailed.component.html",
  styleUrls: ["./works-detailed.component.scss"]
})
export class WorksDetailedComponent implements OnInit {
  private id: string;
  private project: any = {
    next: 0,
    data: [
      {
        image: "../../assets/img/detailed-1.png",
        video: null,
        resolution: "large",
        title: null
      },
      {
        image: "../../assets/img/detailed-2.png",
        video: null,
        resolution: "small",
        title: {
          type: "light",
          text: "Yoto logo animation"
        }
      },
      {
        image: "../../assets/img/detailed-3.png",
        video: null,
        resolution: "small",
        title: {
          type: "light",
          text: "Yoto logo animation"
        }
      },
      {
        image: "../../assets/img/detailed-4.png",
        video: null,
        resolution: "large",
        title: {
          type: "bold",
          text:
            "The industrial design team followed a research-led process ato develop the Yoto Player, interviewing families and children to understand what they found important and then developing a design that prioritised kids being in control."
        }
      },
      {
        image: "../../assets/img/detailed-5.png",
        video: null,
        resolution: "large",
        title: null
      }
    ]
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(route => {
      this.id = route["params"].id;
      this.project.next = +this.id + 1;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      console.log("eshkere", this.id);
    });
  }
}
