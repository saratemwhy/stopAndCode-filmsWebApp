import { Component, input, OnInit } from '@angular/core';
import { IFilm, IShow, Image} from '../model/film-model';
import { ActivatedRoute } from '@angular/router';
import { FilmSService } from '../service/film-s.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-film-homepage',
  templateUrl: './film-homepage.component.html',
  styleUrl: './film-homepage.component.css'
})
export class FilmHomepageComponent implements OnInit{

  constructor(private film: FilmSService, private route: ActivatedRoute){

  }
  formMovie!: FormGroup;

 
  shows: IFilm[]=[];

  
  ngOnInit(): void {
    this.formMovie = new FormGroup({
      inputMovie : new FormControl('')
  })
  }

  onSubmit(){
    
    const inputMovie = this.formMovie.get('inputMovie')!.value;
   
    if(inputMovie){
      this.film.getMovies(inputMovie!).subscribe((r)=>{
        this.shows=r;
        console.log(r)
      })
    
    }
         
  }
      
}

