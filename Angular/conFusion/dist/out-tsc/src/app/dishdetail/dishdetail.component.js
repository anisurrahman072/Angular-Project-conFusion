import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
let DishdetailComponent = class DishdetailComponent {
    constructor(dishservice, route, location) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.dishservice.getDishIds()
            .subscribe(dishIds => this.dishIds = dishIds);
        this.route.params /* this params is an observable of ActivatedRoute service */
            .pipe(switchMap((params) => this.dishservice.getDish(params['id']))) /* here Params is a
  thing of Angular Router which just fetch id from parameter id || and params id not an observable here*/
            .subscribe((dish) => { this.dish = dish; this.setPrevNext(dish.id); });
    }
    setPrevNext(dishId) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }
    goBack() {
        return this.location.back();
    }
};
DishdetailComponent = __decorate([
    Component({
        selector: 'app-dishdetail',
        templateUrl: './dishdetail.component.html',
        styleUrls: ['./dishdetail.component.scss']
    })
], DishdetailComponent);
export { DishdetailComponent };
//# sourceMappingURL=dishdetail.component.js.map