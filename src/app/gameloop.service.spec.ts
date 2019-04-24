import { TestBed } from '@angular/core/testing';

import { GameloopService } from './gameloop.service';

describe('GameloopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameloopService = TestBed.get(GameloopService);
    expect(service).toBeTruthy();
  });
});
