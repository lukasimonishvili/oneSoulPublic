import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorksComponent } from "./works/works.component";
import { HomeComponent } from "./home/home.component";
import { WorksDetailedComponent } from "./works-detailed/works-detailed.component";
import { PeopleComponent } from "./people/people.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";

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
  },
  {
    path: "people",
    component: PeopleComponent,
    data: { depth: 4 }
  },
  {
    path: "services",
    component: ServicesComponent,
    data: { depth: 5 }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { depth: 6 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
