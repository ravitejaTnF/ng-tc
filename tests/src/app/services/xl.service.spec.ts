import { TestBed } from '@angular/core/testing';

import { XlService } from './xl.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('XlService', () => {
  let service: XlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    })
;
    service = TestBed.inject(XlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
