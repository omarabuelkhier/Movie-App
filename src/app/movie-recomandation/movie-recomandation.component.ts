import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MovieDetailService } from '../services/movie-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { WatchListService } from '../services/watch-list.service';
import { MoviesService } from '../services/movies.service';
import { CustomDatePipe } from '../custom-date.pipe';
import Movie from '../interface';

@Component({
  selector: 'app-movie-recomandation',
  standalone: true,
  imports: [MovieDetailComponent, CustomDatePipe],
  templateUrl: './movie-recomandation.component.html',
  styleUrl: './movie-recomandation.component.css'
})
export class MovieRecomandationComponent {
  moviereco: any;
  id: string = '';
  @Output() sendToParent = new EventEmitter<Movie>();
  
  watchListArray: Movie[] = [];
  hovered: { [key: number]: boolean } = {};
  isHoverd: boolean = false;

  movieService = inject(MoviesService);
  watchListservice = inject(WatchListService);

  constructor(
    private movieRecomandationService: MovieDetailService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.movieRecomandationService.getMovieRecomandation(this.id).subscribe((data: any) => {
      this.moviereco = data.results;

      this.moviereco.forEach((movie: any) => {
        this.hovered[movie.id] = this.movieService.gethoverdmovie(movie.id) || false;
      });
    });

    this.watchListArray = this.watchListservice.getWatchList();
  }

  Hover(movie: any) {
    this.hovered[movie.id] = !this.hovered[movie.id];

  if (this.hovered[movie.id]) {
    this.watchListservice.addToWatchList(movie);
    this.movieService.setHovered(movie);
  } else {
    this.watchListservice.removeFromWatchList(movie);
    this.movieService.removeHovered(movie);
    this.hovered[movie.id] = this.movieService.gethoverdmovie(movie.id) || false;
  }
}
  navigateToDetails(movie:any) {
    setTimeout(() => {
      this.sendToParent.emit(movie);
    }, 200);
    this.movieRecomandationService.getMovieRecomandation(movie.id).subscribe((data: any) => {
      this.moviereco = data.results;

      this.moviereco.forEach((movie: any) => {
        this.hovered[movie.id] = this.movieService.gethoverdmovie(movie.id) || false;
      });
    });
    
    this.router.navigate([`/movie-details/${movie.id}`]);
    
  }
}
