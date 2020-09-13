import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
let DishService = class DishService {
    constructor() { }
    getDishes() {
        return of(DISHES).pipe(delay(2000));
    }
    getDish(id) {
        return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
    }
    getFeatureDish() {
        return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    }
    getDishIds() {
        return of(DISHES.map(dish => dish.id));
    }
};
DishService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DishService);
export { DishService };
//# sourceMappingURL=dish.service.js.map