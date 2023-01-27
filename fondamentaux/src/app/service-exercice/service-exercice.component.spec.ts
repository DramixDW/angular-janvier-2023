import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExerciceComponent } from './service-exercice.component';

describe('ServiceExerciceComponent', () => {
  let component: ServiceExerciceComponent;
  let fixture: ComponentFixture<ServiceExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExerciceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
