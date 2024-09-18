import { Component, inject, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { WatchListService } from '../services/watch-list.service';
import Movie from '../interface';

import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { MovieListPaginationComponent } from '../movie-list-pagination/movie-list-pagination.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [FontAwesomeModule, MovieCardComponent, RouterLink, SearchComponent, MovieListPaginationComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  currentPage: number = 1;
  total_pages: number = 1;
  pageSize: number = 20;
  watchList: Movie[] = [];
  watchListservice = inject(WatchListService);
  @Input() rating: number = 0;

  moviesList: any[] = [];
  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.movieService.getPaginatedData(this.currentPage).subscribe((res) => {
      this.moviesList = res.results;
      this.currentPage = res.page;
    });
    this.movieService.getData().subscribe((data: any) => {
      this.moviesList = data.results;
      this.currentPage = data.page;
    });
    this.watchList = this.watchListservice.getWatchList();

  }
  reciveFromChild(data: any) {
    this.moviesList = data;
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.movieService.getMovies()

  }

}
