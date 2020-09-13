import { TestBed } from '@angular/core/testing';
import { LeaderService } from './leader.service';
describe('LeaderService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LeaderService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=leader.service.spec.js.map