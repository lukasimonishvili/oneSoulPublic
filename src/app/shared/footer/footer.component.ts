import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  PhoneCall(phoneNumber){
    window.open(`tel:${phoneNumber}`);
  }

  senMail(mail){
    window.open(`mailto:${mail}`);
  }

}
