import { Component, inject } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router, RouterLink } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchService=inject(SearchService)
constructor(private router:Router){}
  searchFn(key:string){
    if(key==""||key.startsWith(' '))
      {
      this.router.navigate([""]);
    }else{
     this.searchService.getSearchResult(key);
    this.router.navigate([`/search/${key}`]);
    }
}
}

