import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Movie from '../interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private data = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) {

   }

  getPaginatedData(page: number): Observable<Movie>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=b6d1b0c65bcc889f545646a926fb22b9&page=${page}`);
  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=b6d1b0c65bcc889f545646a926fb22b9');
   }
    private movies: Movie[] = [];
    private hovered: any[] = [];

   addToWatchListArray(data: Movie) {
    this.movies.push(data);
    this.hovered.push({
      id:data.results,
      hover:true
    });
   }
   getMovie() {
    return this.movies;
   }
   getHovered() {
    return this.hovered;
   }
   setHovered(data: any) {
    this.hovered.push({
      id:data.id,
      hover:true
    });
   }
   removeHovered(data: any) {
    const index = this.hovered.findIndex(movie => movie.id === data.id);
    if (index !== -1) {
      this.hovered.splice(index, 1);
    }
   }
   gethoverdmovie(id: number) {
    return this.hovered.find(movie => movie.id === id);
   }
   setdata(data:any){
    this.data.next(data);
   }
   getData(){
    return this.data.asObservable();
   }
}
