import { TestBed } from '@angular/core/testing';

import { MenuLateralService } from './menu-lateral.service';

describe('MenuLateralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuLateralService = TestBed.get(MenuLateralService);
    expect(service).toBeTruthy();
  });
});
