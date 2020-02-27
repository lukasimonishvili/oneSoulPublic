import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../angular-services/contact/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
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
      country: ""
    },
    phone: {
      landline: "",
      mobile: "",
      fax: ""
    }
  };
  unselectedServices: Array<string> = [];
  activeSlideIndex: number = 0;
  autoPlay;
  slider: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.fetchContactData();
    this.createContactForm();
  }

  fetchContactData() {
    this.contactService.fetchContactData().subscribe(response => {
      this.slider = response["slider"];
      this.unselectedServices = response["services"];
      this.contact = response;
      this.autoPlay = setInterval(() => {
        this.next();
      }, 3000);
    });
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      projectName: ["", Validators.required],
      companyName: ["", Validators.required],
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required]
    });
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

  onContactSubmit() {
    if (this.contactForm.invalid || !this.services.length) {
      return;
    }

    if (this.contactForm.valid && this.services.length) {
      let payload = this.contactForm.value;
      payload = { ...payload, services: this.services };

      this.contactService.sendMessage(payload).subscribe(response => {
        console.log(response);
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
