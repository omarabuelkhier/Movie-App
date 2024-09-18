import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private watchList: any[] = [];
  counter:number = 0;
  constructor(private counterService: CounterService) { }
  ngOnInit(){
    this.counterService.getCounter().subscribe(counter => {
      this.counter = counter;
    });
  }
  getWatchList(){
    return this.watchList;
  }
  addToWatchList(item: any){
    if(!this.watchList.includes(item)){
      this.watchList.push(item);
      this.counterService.increaseCounter();
    }
  }
  removeFromWatchList(item: any){
    const index = this.watchList.indexOf(item);
    if(index !== -1){
      this.watchList.splice(index, 1);
      this.counterService.decreaseCounter();
    }
    console.log(this.watchList);
  }
  setWatchList(watchList: any[]){
    this.watchList = watchList;
  }
}
