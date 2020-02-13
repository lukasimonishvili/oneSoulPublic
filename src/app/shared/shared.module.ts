import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { WorksComponent } from "./works/works.component";
import { WorksWithComponent } from "./works-with/works-with.component";
import { FooterComponent } from "./footer/footer.component";
import { ServiceListComponent } from "./service-list/service-list.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    WorksComponent,
    WorksWithComponent,
    FooterComponent,
    ServiceListComponent
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    HeaderComponent,
    BannerComponent,
    WorksComponent,
    WorksWithComponent,
    ServiceListComponent,
    FooterComponent
  ]
})
export class SharedModule {}
