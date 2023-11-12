import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [MoviesComponent, DetailsComponent],
  imports: [CommonModule],
  exports: [MoviesComponent, DetailsComponent],
})
export class MoviesModule {}
