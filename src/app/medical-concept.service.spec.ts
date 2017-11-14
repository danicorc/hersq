import { TestBed, inject } from '@angular/core/testing';

import { MedicalConceptService } from './medical-concept.service';

describe('MedicalConceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalConceptService]
    });
  });

  it('should be created', inject([MedicalConceptService], (service: MedicalConceptService) => {
    expect(service).toBeTruthy();
  }));
});
