import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
let PromotionService = class PromotionService {
    constructor() { }
    getPromotions() {
        return of(PROMOTIONS).pipe(delay(2000));
    }
    getPromotion(id) {
        return of(PROMOTIONS.filter(promotion => promotion.id === id)[0]).pipe(delay(2000));
        // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
        // (promo) bolte PROMOTIONS array ar each object ke bujhano hocce. Jodi (promo.id === id) true hoy tahole filter array te object ta add hoe jabe (). Object gulo obossoi jeno Promotion type hoy.
    }
    getFeaturePrmotion() {
        return of(PROMOTIONS.filter(promotion => promotion.featured)[0]).pipe(delay(2000));
    }
};
PromotionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PromotionService);
export { PromotionService };
//# sourceMappingURL=promotion.service.js.map