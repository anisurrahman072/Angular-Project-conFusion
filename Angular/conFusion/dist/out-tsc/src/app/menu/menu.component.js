import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(dishService) {
        this.dishService = dishService;
    } // The DishService is injected into a new object dishService
    ngOnInit() {
        this.dishService.getDishes()
            .subscribe((dishes) => this.dishes = dishes);
    }
    onSelect(dish) {
        this.selectedDish = dish;
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map