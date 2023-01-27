import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExcercieComponent } from './template-excercie.component';

describe('TemplateExcercieComponent', () => {
  let component: TemplateExcercieComponent;
  let fixture: ComponentFixture<TemplateExcercieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateExcercieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateExcercieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
