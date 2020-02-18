import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  services: Array<string> = [];
  unselectedServices: Array<string> = [
    "Video production",
    "UX Design",
    "Motion Graphics",
    "Graphics Design",
    "UI Design",
    "Documentary Filming"
  ];
  activeSlideIndex: number = 0;
  autoPlay;
  slider: Array<any> = [
    {
      image: "../../assets/img/slide-1.png",
      text: "Best bars and wine",
      link: null
    },
    {
      image:
        "https://theamericangenius.com/wp-content/uploads/2012/10/twitter-cover.jpg",
      text: "test slide 1",
      link: null
    },
    {
      image:
        "https://www.bestcoverpix.com/wp-content/uploads/2013/09/Love-cover-448202-copy.jpg",
      text: "test slide 2",
      link: null
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createContactForm();
    this.autoPlay = setInterval(() => {
      this.next();
    }, 3000);
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
    if (this.contactForm.invalid) {
      return;
    }

    if (this.contactForm.valid) {
      let payload = this.contactForm.value;
      payload = { ...payload, services: this.services };
      console.log("...data...", payload);
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
