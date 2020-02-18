import { Component } from "@angular/core";
import {
  trigger,
  transition,
  group,
  query,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("routeAnimation", [
      transition(
        "1 <=> 2, 1 <=> 3, 2 <=> 3, 3 <=> 3, 1 <=> 4, 2 <=> 4, 3 <=> 4, 1 <=> 5, 2 <=> 5, 3 <=> 5, 4 <=> 5, 1 <=> 6, 2 <=> 6, 3 <=> 6, 4 <=> 6, 5 <=> 6",
        [
          style({ height: "!" }),
          query(":enter", style({ opacity: "0" })),
          // query(
          //   ":enter, :leave",
          //   style({ position: "absolute", top: 0, left: 0, right: 0 })
          // ),
          group([
            query(":leave", [animate("0s", style({ opacity: "0" }))]),
            query(":enter", [animate("0.5s", style({ opacity: "1" }))])
          ])
        ]
      )

      // transition("2 => 1", [
      //   style({ height: "!" }),
      //   query(":enter", style({ transform: "translateX(100%)" })),
      //   query(
      //     ":enter, :leave",
      //     style({ position: "absolute", top: 0, left: 0, right: 0 })
      //   ),
      //   group([
      //     query(":leave", [
      //       animate("0.5s", style({ transform: "translateX(200%)" }))
      //     ])
      //   ])
      // ])
    ])
  ]
})
export class AppComponent {
  title = "oneSoulPublic";

  getDepth(outlet) {
    return outlet.activatedRouteData["depth"];
  }
}
