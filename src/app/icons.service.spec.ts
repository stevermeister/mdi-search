/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IconsService } from './icons.service';

describe('IconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsService]
    });
  });

  it('should ...', inject([IconsService], (service: IconsService) => {
    expect(service).toBeTruthy();
  }));
});
