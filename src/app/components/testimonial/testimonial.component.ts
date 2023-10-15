import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from 'src/app/models/IBlog';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  submitEmail: FormGroup;
  public blog: Blog = {
    header: "Our Blog",
    text: "Value proposition accelerator product management venture",
    data: [
      {
        image: "../../../assets/images/blog1.png",
        text: "Category",
        date: "November 22, 2021",
        details:
          "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
        imageMain: "../../../assets/images/harry.png",
        user: "Chandler Bing",
      },
      {
        image: "../../../assets/images/blog2.png",
        text: "Category",
        date: "November 22, 2021",
        details:
          "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
        imageMain: "../../../assets/images/severus.png",
        user: "Rachel Green",
      },
      {
        image: "../../../assets/images/blog3.png",
        text: "Category",
        date: "November 22, 2021",
        details:
          "Beta prototype sales iPad gen-z marketing network effects value  proposition.",
        imageMain: "../../../assets/images/albus.png",
        user: "Monica Geller",
      },
    ],
    main: {
      header: "An enterprise template to ramp up your company website",
      text: "Start now",
    },
    faq: {
      header:
        "We connect our customers with the best, and help them keep up-and stay open.",
      data: [
        {
          text: "We connect our customers with the best?",
        },
        {
          text: "Android research & development rockstar?",
        },
      ],
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Quaerat quia excepturi necessitatibus",
    customer: "../../../assets/images/cta3.png"
  };
  
  email: string = '';
  isValidEmail: boolean = true;

  constructor(private fb: FormBuilder,){
    this.submitEmail = this.fb.group({
      email: this.fb.control("", [Validators.required]),
    })
  }

  handleEmailChange(event: any) {
    this.email = event.target.value;
  }
  
  handleValidationClick() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    this.isValidEmail = emailPattern.test(this.submitEmail.value);

    if (this.isValidEmail === true) {
      this.email = '';
    }
  }

  isExpanded = new Array(this.blog?.faq?.data.length).fill(false);
  displayIcon: boolean = false

  toggleAccordion(index: number) {
    const updatedExpanded = [...this.isExpanded];
    updatedExpanded[index] = !updatedExpanded[index];
    this.isExpanded = updatedExpanded;
  }
}
