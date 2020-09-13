import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
let HeaderComponent = class HeaderComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openLoginForm() {
        this.dialog.open(LoginComponent, { width: '500px', height: '450px' });
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map