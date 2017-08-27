import { inject, TestBed } from '@angular/core/testing';

import { SequenceService } from './sequence.service';

describe('SequenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SequenceService]
    });
  });

  it('should ...', inject([SequenceService], (service: SequenceService) => {
    expect(service).toBeTruthy();
  }));
});