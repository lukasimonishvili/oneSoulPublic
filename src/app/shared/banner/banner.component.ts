import { Component, OnInit } from "@angular/core";
import { BannerService } from "../../angular-services/banner/banner.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  private banner: any = {
    image: "",
    text: "",
    link: "",
    title: "",
    banner_id: "",
  };

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.fetchBannerdata();
  }

  fetchBannerdata() {
    this.bannerService.fettchBannerData().subscribe((response) => {
      this.banner = response;
      console.log(response);
    });
  }
}
