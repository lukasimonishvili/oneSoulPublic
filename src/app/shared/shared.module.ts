import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { WorksComponent } from "./works/works.component";
import { WorksWithComponent } from "./works-with/works-with.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    WorksComponent,
    WorksWithComponent
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    HeaderComponent,
    BannerComponent,
    WorksComponent,
    WorksWithComponent
  ]
})
export class SharedModule {}
