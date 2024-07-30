import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmHomepageComponent } from './film-homepage/film-homepage.component';



const routes: Routes = [
  {path: ":inputMovie", component: FilmHomepageComponent},
  {path:"", component: FilmHomepageComponent},
  {path: "detail/:id", component: FilmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
