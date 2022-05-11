import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Output() changeRating = new EventEmitter<number>();
  @Input() rate: number = 3;
  @Input() clickable: boolean = true;

  emptyStar = '&star;';
  filledStar = '&starf;';

  rates: { chosen: boolean }[] = [
    { chosen: false },
    { chosen: false },
    { chosen: false },
    { chosen: false },
    { chosen: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.onClick(this.rate - 1);
  }

  onClick(i: number) {
    if (
      i < 0 ||
      (i === 4 && this.rates[i].chosen) ||
      (i !== 4 && this.rates[i].chosen && !this.rates[i + 1].chosen)
    ) {
      this.rates.forEach((rate) => {
        rate.chosen = false;
      });
    } else if (i !== 4 && this.rates[i].chosen && this.rates[i + 1].chosen) {
      for (let j = i + 1; j <= 4; j++) {
        this.rates[j].chosen = false;
      }
    } else {
      this.rates.forEach((rate) => {
        rate.chosen = false;
      });
      for (let j = 0; j <= i; j++) {
        this.rates[j].chosen = true;
      }
    }

    i >= 0 && this.rates[i].chosen
      ? this.changeRating.emit(i + 1)
      : this.changeRating.emit(0);
  }
}
