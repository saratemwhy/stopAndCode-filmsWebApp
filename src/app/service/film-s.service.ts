import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm, IShow } from '../model/film-model';
import { query } from '@angular/animations';
import { IFilmDetail } from '../model/filmDetail-model';

@Injectable({
  providedIn: 'root'
})
export class FilmSService {
  

  constructor(private http: HttpClient) { }

  getMovies(inputMovie: string): Observable<IFilm[]>{
    return this.http.get<IFilm[]>(`https://api.tvmaze.com/search/shows?q=${inputMovie}`);
  }

  getDetail(id: number): Observable<IFilmDetail>{
    return this.http.get<IFilmDetail>(`https://api.tvmaze.com/shows/${id}`)
  }
}
