import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router, RouterLink } from '@angular/router';
import { WatchListService } from '../services/watch-list.service';
import { RateComponent } from "../rate/rate.component";
import { CustomDatePipe } from '../custom-date.pipe';  // Import the custom date pipe
import { MovieDetailService } from '../services/movie-detail.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, RateComponent, CustomDatePipe],  // Add CustomDatePipe to imports
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  movieService = inject(MoviesService);
  moviedetailservice = inject(MovieDetailService);
  hovered: any[] = [];
  watchListservice = inject(WatchListService);
  isHoverd: boolean = false;

  @Input() movieData: any;
  @Output() sendToParent = new EventEmitter<number>();
  @Input() watchListArray: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.watchListArray = this.watchListservice.getWatchList();
    this.hovered = this.movieService.getHovered();
    this.isHoverd = this.movieService.gethoverdmovie(this.movieData.id);
    if (this.isHoverd === undefined) {
      this.isHoverd = false;
    }
  }

  navigateToDetails(id: number) {
    this.sendToParent.emit(id);
    this.moviedetailservice.setid(id);
    this.router.navigate([`/movie-details/${id}`]);
  }

  hoverd() {
    this.isHoverd = !this.isHoverd;
    if (this.isHoverd == true) {
      this.watchListservice.addToWatchList(this.movieData);
      this.movieService.setHovered(this.movieData);
    }
    if (this.isHoverd == false) {
      this.watchListservice.removeFromWatchList(this.movieData);
      this.movieService.removeHovered(this.movieData);
      this.isHoverd = this.movieService.gethoverdmovie(this.movieData.id);
      if (this.isHoverd === undefined) {
        this.isHoverd = false;
      }
    }
  }
}
