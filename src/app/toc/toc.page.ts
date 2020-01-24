import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
    title: "Chapter 1 | Shapes ",
    url: "/chapter1",
    icon: "finger-print"
    },
    {
      title: "Chapter 2 | Silk Painting",
      url: "/chapter2",
      icon: "pizza"

    },
    {
      title: "Chapter 3 | Water Color",
      url: "/chapter3",
      icon: "planet"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
