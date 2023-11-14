import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { CutstrPipe } from '../pipes/cutstr.pipe';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MoviesComponent, DetailsComponent, CutstrPipe],
  imports: [CommonModule,RouterModule],
  exports: [MoviesComponent, DetailsComponent],
})
export class MoviesModule {}
