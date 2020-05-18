import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ContactService } from "../angular-services/contact/contact.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  services: Array<string> = [];
  contact: any = {
    title: "",
    text: "",
    address: {
      address: "",
      city: "",
      country: "",
    },
    phone: {
      landline: "",
      mobile: "",
      fax: "",
    },
  };
  unselectedServices: Array<string> = [];
  activeSlideIndex: number = 0;
  autoPlay;
  slider: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    this.fetchContactData();
    this.createContactForm();
  }

  fetchContactData() {
    this.contactService.fetchContactData().subscribe((response) => {
      this.slider = response["slider"];
      this.unselectedServices = response["services"];
      this.contact = response;
      this.setSwiperConfigs();
    });
  }

  setSwiperConfigs() {
    var killId: any = setTimeout(function () {
      for (var i = killId; i > 0; i--) clearInterval(i);
    }, 3000);
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      projectName: ["", Validators.required],
      companyName: ["", Validators.required],
      fullName: ["", Validators.required],
      email: ["", [Validators.required, this.mailValidator]],
      phone: ["", Validators.required],
    });
  }

  makeCall(phoneNumber) {
    window.open(`tel:${phoneNumber}`);
  }

  onTabSelect(selected, service) {
    let services = this.services;

    if (selected) {
      services.splice(services.indexOf(service), 1);
    } else {
      services.push(service);
    }

    this.services = services;
  }

  mailValidator(control: FormControl) {
    let mail = control.value.toString().split("@");
    let result = null;

    if (mail.length != 2) {
      result = { validMail: false };
    } else {
      let afterAt = mail[1].split(".");
      if (
        afterAt.length < 2 ||
        afterAt[0].length < 2 ||
        afterAt[1].length < 2
      ) {
        result = { validMail: false };
      }
    }
    return result;
  }

  onContactSubmit() {
    if (this.contactForm.invalid || !this.services.length) {
      return;
    }

    if (this.contactForm.valid && this.services.length) {
      let payload = this.contactForm.value;
      payload = { ...payload, services: this.services };

      this.contactService.sendMessage(payload).subscribe((response) => {
        if (response) {
          this.notifierService.notify(
            "success",
            "Your message sent. Thank you!"
          );
        } else {
          this.notifierService.notify(
            "success",
            "Unexpected error. Please try again later"
          );
        }

        this.services = [];
        (document.getElementById("phone") as HTMLInputElement).value = "";
        this.contactForm.reset();
        console.log(this.services);
      });
    }
  }

  resetSliderAutoPlay() {
    clearInterval(this.autoPlay);

    this.autoPlay = setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    let nextSlide = this.activeSlideIndex + 1;

    if (nextSlide == this.slider.length) {
      this.activeSlideIndex = 0;
    } else {
      this.activeSlideIndex = nextSlide;
    }

    this.resetSliderAutoPlay();
  }

  prev() {
    let prevSlide = this.activeSlideIndex - 1;

    if (prevSlide < 0) {
      this.activeSlideIndex = this.slider.length - 1;
    } else {
      this.activeSlideIndex = prevSlide;
    }

    this.resetSliderAutoPlay();
  }
}
