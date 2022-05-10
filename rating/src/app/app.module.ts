import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarsComponent } from './stars/stars.component';
import { RatingComponent } from './rating/rating.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { FormsModule } from '@angular/forms';
import { AverageRatingComponent } from './average-rating/average-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    RatingComponent,
    RatingListComponent,
    AverageRatingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
