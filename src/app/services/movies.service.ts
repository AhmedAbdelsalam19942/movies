import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public _HttpClient: HttpClient) {}
  getTrendingMovies(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=63acfc4bbc343d7a8bae68a0b3de7a79'
    );
  }
}
