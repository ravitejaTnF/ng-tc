import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-testing',
  templateUrl: './event-testing.component.html',
  styleUrls: ['./event-testing.component.css']
})
export class EventTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;
  counter() {
    this.count++;
  }

}
