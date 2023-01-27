import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivLoginExerciceComponent } from './reactiv-login-exercice.component';

describe('ReactivLoginExerciceComponent', () => {
  let component: ReactivLoginExerciceComponent;
  let fixture: ComponentFixture<ReactivLoginExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivLoginExerciceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivLoginExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
