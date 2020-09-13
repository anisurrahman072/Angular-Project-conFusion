import { TestBed } from '@angular/core/testing';
import { DishService } from './dish.service';
describe('DishService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DishService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dish.service.spec.js.map