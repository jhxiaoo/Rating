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

  onChangeReating(rate: number){
    this.changeRatingEmitter.emit({index: this.ratingIndex, rate: rate});
  }
}
