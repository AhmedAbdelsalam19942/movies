import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any = [];
  constructor(private _MoviesService: MoviesService) {
    this._MoviesService.getTrendingMovies().subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });
  }
}
