import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
faHeart = faHeart
  constructor(private counterService: CounterService) { }
  counter: number = 0;
  ngOnInit(){
    this.counterService.getCounter().subscribe(counter => {
      this.counter = counter;
    });

}
}
