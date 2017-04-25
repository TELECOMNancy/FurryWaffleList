import { TestBed, inject } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInService]
    });
  });

  it('should ...', inject([SignInService], (service: SignInService) => {
    expect(service).toBeTruthy();
  }));
});
