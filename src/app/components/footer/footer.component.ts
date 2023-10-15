import { Component } from '@angular/core';
import { Footer } from 'src/app/models/IFooter';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  

   footer: Footer = {
    logo: "../../../assets/images/news45.jpg",
    text: "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
    caption: "All Rights Reserved.",
    data: [
      {
        header: "Landings",
        links: [
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Product",
            url: "product",
          },
          {
            name: "Services",
            url: "services",
          },
        ],
      },
      {
        header: "Company",
        links: [
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Careers",
            url: "careers",
          },
          {
            name: "Services",
            url: "services",
          },
        ],
      },
      {
        header: "Resources",
        links: [
          {
            name: "Blog",
            url: "/blog",
          },
          {
            name: "Product",
            url: "product",
          },
          {
            name: "Services",
            url: "services",
          },
        ],
      },
    ],
  };
}
