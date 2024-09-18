import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchResultComponent } from './search-result/search-result.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieListComponent,
        title: 'Movie Home'
    },
    {
        path:"search/:key",
        component: SearchResultComponent,
        title: 'Movie Search'
    },
  // {
  //   path: "search",
  //   component: MovieListComponent,
  //   title: 'Movie Search'
  // },
    {
        path:"watch-list",
        component: WatchListComponent,
        title: 'Movie Watch List'
    },
    {
        path:"movie-details/:id",
        component: MovieDetailComponent,
        title: 'Movie Details'
    },
    {
        path: "**",
        component: NotfoundComponent,
        title: 'Not Found'
    },


];
