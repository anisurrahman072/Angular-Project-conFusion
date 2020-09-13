import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(dishService, promotionService, leaderService) {
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
    }
    ngOnInit() {
        this.dishService.getFeatureDish()
            .subscribe((dish) => this.dish = dish);
        this.promotionService.getFeaturePrmotion()
            .subscribe((promotion) => this.promotion = promotion);
        this.leaderService.getLeader('3')
            .subscribe((leader) => this.leader = leader);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map