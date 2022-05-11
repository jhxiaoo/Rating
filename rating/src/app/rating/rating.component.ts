import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() ratingitem: any = {};
  @Input() ratingIndex: number = 0;
  @Output() changeRatingEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeRating(rate: number){
    this.changeRatingEmitter.emit({i: this.ratingIndex, rate: rate});
  }
}
