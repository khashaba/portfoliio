import { TestBed } from '@angular/core/testing';

import { MainFunctionalityService } from './main-functionality.service';

describe('MainFunctionalityService', () => {
  let service: MainFunctionalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainFunctionalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
