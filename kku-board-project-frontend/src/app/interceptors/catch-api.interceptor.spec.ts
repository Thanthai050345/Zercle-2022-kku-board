import { TestBed } from '@angular/core/testing';

import { CatchApiInterceptor } from './catch-api.interceptor';

describe('CatchApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatchApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatchApiInterceptor = TestBed.inject(CatchApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
