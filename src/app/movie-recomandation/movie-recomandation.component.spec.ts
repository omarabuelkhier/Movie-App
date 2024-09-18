import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecomandationComponent } from './movie-recomandation.component';

describe('MovieRecomandationComponent', () => {
  let component: MovieRecomandationComponent;
  let fixture: ComponentFixture<MovieRecomandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRecomandationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieRecomandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
