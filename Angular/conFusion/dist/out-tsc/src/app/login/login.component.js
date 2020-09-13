import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = {
            username: '',
            password: '',
            remember: false
        };
    } // MatDialogRef <dialog>
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.user);
        this.dialogRef.close();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map