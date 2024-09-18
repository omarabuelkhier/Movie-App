import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListPaginationComponent } from './movie-list-pagination.component';

describe('MovieListPaginationComponent', () => {
  let component: MovieListPaginationComponent;
  let fixture: ComponentFixture<MovieListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
