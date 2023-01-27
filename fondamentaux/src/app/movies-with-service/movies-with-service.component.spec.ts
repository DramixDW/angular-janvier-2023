import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWithServiceComponent } from './movies-with-service.component';

describe('MoviesWithServiceComponent', () => {
  let component: MoviesWithServiceComponent;
  let fixture: ComponentFixture<MoviesWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWithServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
