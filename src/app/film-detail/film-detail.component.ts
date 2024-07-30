import { Component, OnInit } from '@angular/core';
import { IFilm } from '../model/film-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilmSService } from '../service/film-s.service';
import { IFilmDetail } from '../model/filmDetail-model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent implements OnInit {
    
    constructor(private film: FilmSService, private route: ActivatedRoute){

    }

    filmsM!: IFilmDetail;

    

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id)
        this.film.getDetail(+id!).subscribe(
          (f) => {
            this.filmsM = f;
            console.log(f)
          }
        );
      
    }

}
