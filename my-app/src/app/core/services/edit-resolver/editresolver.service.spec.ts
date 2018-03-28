import { TestBed, inject } from '@angular/core/testing';

import { EditresolverService } from './editresolver.service';

describe('EditresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditresolverService]
    });
  });

  it('should be created', inject([EditresolverService], (service: EditresolverService) => {
    expect(service).toBeTruthy();
  }));
});
