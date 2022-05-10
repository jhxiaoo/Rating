import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.scss']
})
export class AverageRatingComponent implements OnInit {
  @Input() rating: number = 0;

  constructor() { 

  }

  ngOnInit(): void {
    // console.log("average", this.rating);
  }

}
