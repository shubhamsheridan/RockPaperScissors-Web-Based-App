import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate: Date;
  currentYear: number;

  constructor() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
  }

  ngOnInit() {
    // Any additional initialization if needed
  }
}
