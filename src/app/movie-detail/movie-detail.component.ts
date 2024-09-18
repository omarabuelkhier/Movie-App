import { Component, inject } from '@angular/core';
import { MovieDetailService } from '../services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { MovieRecomandationComponent } from "../movie-recomandation/movie-recomandation.component";
import { WatchListService } from '../services/watch-list.service';
import { MoviesService } from '../services/movies.service';
import { CustomDatePipe } from '../custom-date.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MovieRecomandationComponent,CustomDatePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movies: any;
  id: string = '';
  watchListArray: any[] = [];
  hovered: { [key: number]: boolean } = {};

  movieService = inject(MoviesService);
  watchListService = inject(WatchListService);

  constructor(private movieDetailService: MovieDetailService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.movieDetailService.getMovieDetails(this.id).subscribe((data: any) => {
      this.movies = data;
      this.hovered[this.movies.id] = this.movieService.gethoverdmovie(this.movies.id) || false;
    });
    this.watchListArray = this.watchListService.getWatchList();
    this.recive;
  }

  Hover(movie: any) {
    this.hovered[movie.id] = !this.hovered[movie.id];

    if (this.hovered[movie.id]) {
      this.watchListService.addToWatchList(movie);
      this.movieService.setHovered(movie);
    } else {
      this.watchListService.removeFromWatchList(movie);
      this.movieService.removeHovered(movie);
      this.hovered[movie.id] = this.movieService.gethoverdmovie(movie.id) || false;
    }
  }
  recive(movie: any) {
    if(movie){
      this.movies = movie;
    }
  }
}
