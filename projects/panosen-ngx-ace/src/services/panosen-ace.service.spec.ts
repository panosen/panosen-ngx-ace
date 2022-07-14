import { TestBed } from '@angular/core/testing';

import { PanosenAceService } from './panosen-ace.service';

describe('PanoAceService', () => {
    let service: PanosenAceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PanosenAceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
