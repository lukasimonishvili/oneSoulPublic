import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../../angular-services/services/services.service";

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"]
})
export class ServiceListComponent implements OnInit {
  private services: any = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.fetchServicesData();
  }

  fetchServicesData() {
    this.servicesService.fetchServicesData().subscribe(response => {
      this.services = response;
    });
  }
}
