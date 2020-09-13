import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
let LeaderService = class LeaderService {
    constructor() { }
    getLeaders() {
        return of(LEADERS).pipe(delay(2000));
    }
    getLeader(id) {
        return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(delay(2000));
    }
    getFeatureLeader() {
        return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
    }
};
LeaderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LeaderService);
export { LeaderService };
//# sourceMappingURL=leader.service.js.map