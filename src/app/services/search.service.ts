import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
   key: string = "";

  constructor(private http: HttpClient) { }

  getSearchResult(key: string) {
    this.key = key;
  }

  getSearchMovies() {
    console.log(this.key, "service key");
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=b6d1b0c65bcc889f545646a926fb22b9&query=${this.key}`);
  }

  getKey() {
    return this.key;
  }
}
