import { TestBed } from '@angular/core/testing';

import { AutreGuard } from './autre.guard';

describe('AutreGuard', () => {
  let guard: AutreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
