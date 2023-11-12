import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  movies: any = [];
  constructor(private _MoviesService: MoviesService) {
    this._MoviesService.getTrendingMovies().subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });
  }
}
