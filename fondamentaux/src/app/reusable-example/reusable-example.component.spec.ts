import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableExampleComponent } from './reusable-example.component';

describe('ReusableExampleComponent', () => {
  let component: ReusableExampleComponent;
  let fixture: ComponentFixture<ReusableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
