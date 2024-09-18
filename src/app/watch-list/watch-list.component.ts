import { Component } from '@angular/core';
import { WatchListCardComponent } from "../watch-list-card/watch-list-card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink  } from '@angular/router';
import { WatchListService } from '../services/watch-list.service';


@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [WatchListCardComponent,FontAwesomeModule,RouterLink],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {
  watchList: any[] = [];
  constructor(private watchListService: WatchListService) { }
  ngOnInit() {
    this.watchList = this.watchListService.getWatchList();
  }
}
