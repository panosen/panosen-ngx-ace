import { TestBed } from '@angular/core/testing';

import { PanoAceService } from './pano-ace.service';

describe('PanoAceService', () => {
  let service: PanoAceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanoAceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
