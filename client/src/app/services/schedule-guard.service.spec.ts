import { TestBed, inject } from '@angular/core/testing';

import { ScheduleGuardService } from './schedule-guard.service';

describe('ScheduleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleGuardService]
    });
  });

  it('should be created', inject([ScheduleGuardService], (service: ScheduleGuardService) => {
    expect(service).toBeTruthy();
  }));
});
