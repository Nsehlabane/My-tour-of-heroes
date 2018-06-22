import { TestBed, inject } from '@angular/core/testing';

import { Message\Service } from './message\.service';

describe('Message\Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Message\Service]
    });
  });

  it('should be created', inject([Message\Service], (service: Message\Service) => {
    expect(service).toBeTruthy();
  }));
});
