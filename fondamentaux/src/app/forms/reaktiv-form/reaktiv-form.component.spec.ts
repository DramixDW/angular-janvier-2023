import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaktivFormComponent } from './reaktiv-form.component';

describe('ReaktivFormComponent', () => {
  let component: ReaktivFormComponent;
  let fixture: ComponentFixture<ReaktivFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaktivFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaktivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
