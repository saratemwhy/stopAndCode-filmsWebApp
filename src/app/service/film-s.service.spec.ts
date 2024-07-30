import { TestBed } from '@angular/core/testing';

import { FilmSService } from './film-s.service';

describe('FilmSService', () => {
  let service: FilmSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
