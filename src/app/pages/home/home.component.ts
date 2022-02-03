import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lang = [
    { name: "Live Now" },
    { name: "This Week" },
    { name: "Last Week" },
    { name: "This Month" },
    { name: "Last Month" },
    { name: "Last 12 Months" },
    { name: "Custom Range" }
  ];

}
