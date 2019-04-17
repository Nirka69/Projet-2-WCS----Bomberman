import { TestBed } from '@angular/core/testing';

import { MouvePlayerService } from './mouve-player.service';

describe('MouvePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouvePlayerService = TestBed.get(MouvePlayerService);
    expect(service).toBeTruthy();
  });
});
