import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorksComponent } from "./works/works.component";
import { HomeComponent } from "./home/home.component";
import { WorksDetailedComponent } from "./works-detailed/works-detailed.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { depth: 1 }
  },
  {
    path: "works",
    component: WorksComponent,
    data: { depth: 2 }
  },
  {
    path: "works/detailed/:id",
    component: WorksDetailedComponent,
    data: { depth: 3 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
