import { Component, EventEmitter, inject, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list-pagination.component.html',
  styleUrl: './movie-list-pagination.component.css'
})
export class MovieListPaginationComponent {
CommonModule: any;
page:number=1;
movieService = inject(MoviesService);
data: any;
num = 1;
ngOnInit() {
  this.movieService.getPaginatedData(this.page).subscribe((res) => {
    this.data = res;
  });
}

back() {
  if (this.page !=0) {
    this.page=this.page-1;
    this.movieService.getPaginatedData(this.page).subscribe((res) => {
      this.data = res;
    });
    console.log(this.data);
    this.movieService.setdata(this.data);
    this.num=this.data.page;
  }
}
next() {
  this.page=this.page+1;
  this.movieService.getPaginatedData(this.page).subscribe((res) => {
    this.data = res;
  });
  console.log(this.data);
  this.movieService.setdata(this.data);
  this.num=this.data.page;
}

}
