import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  id :any;
  constructor(private http: HttpClient) { }
  getMovieDetails(id : string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b6d1b0c65bcc889f545646a926fb22b9`)
  }
  getMovieRecomandation(id : string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b6d1b0c65bcc889f545646a926fb22b9`)
  }
  setid(id: any) {
    this.id = id;
    this.getMovieRecomandation(this.id);
  }
  getid() {
    return this.id;
  }
}