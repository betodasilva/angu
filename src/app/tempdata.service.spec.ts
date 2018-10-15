import { TestBed, inject } from '@angular/core/testing';

import { TempdataService } from './tempdata.service';

describe('TempdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempdataService]
    });
  });

  it('should be created', inject([TempdataService], (service: TempdataService) => {
    expect(service).toBeTruthy();
  }));
});
