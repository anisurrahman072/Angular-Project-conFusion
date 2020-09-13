import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; /* RoutingModule onek gulo routes
theke je kono akta route select korbe.
routes gulo ace routes.ts file ar moddhe */
import { routes } from '../app-routing/routes';
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            RouterModule.forRoot(routes) // supply routes as parameter for RouterModule
        ],
        exports: [
            RouterModule // It will be used by app.module.ts
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map