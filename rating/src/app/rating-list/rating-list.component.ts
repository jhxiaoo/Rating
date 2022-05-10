import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  updated: boolean = true;
  averageRating: number = 0;
  ratings = [
    {
      name: 'Keisha Holmes',
      rate: 4,
      content: 'Proin interdum mauris non ligula pellentesque ultrices.',
    },
    {
      name: 'Allison Ratliff',
      rate: 1,
      content: 'Phasellus id sapien in sapien iaculis congue.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getAverageRating();
  }

  getAverageRating() {
    return (this.averageRating = Math.ceil(
      this.ratings.reduce((a, b) => a + b.rate, 0) / this.ratings.length
    ));
  }

  updateRating({ i, rate }: { i: number; rate: number }) {
    this.ratings[i].rate = rate;
    this.getAverageRating();
  }
}
