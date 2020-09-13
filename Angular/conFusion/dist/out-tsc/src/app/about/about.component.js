import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutComponent = class AboutComponent {
    constructor(leaderService) {
        this.leaderService = leaderService;
    }
    ngOnInit() {
        this.leaderService.getLeaders()
            .subscribe((leaders) => this.leaders = leaders);
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map