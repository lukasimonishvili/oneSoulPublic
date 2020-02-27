import { Component, OnInit } from "@angular/core";
import { FooterService } from "../../angular-services/footer/footer.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  data: any = {
    phone: "",
    email: "",
    socials: {
      facebook: "",
      instagram: "",
      vimeo: ""
    }
  };

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.fetchFooterData();
  }

  fetchFooterData() {
    this.footerService.fetchFooterData().subscribe(response => {
      this.data = response;
    });
  }

  PhoneCall(phoneNumber) {
    window.open(`tel:${phoneNumber}`);
  }

  senMail(mail) {
    window.open(`mailto:${mail}`);
  }
}
