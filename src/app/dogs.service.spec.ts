import { TestBed } from '@angular/core/testing';

import { DogsService } from './Services/dogs.service';

describe('DogsService', () => {
  let service: DogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
