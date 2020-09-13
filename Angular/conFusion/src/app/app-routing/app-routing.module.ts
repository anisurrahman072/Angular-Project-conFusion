import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; /* RoutingModule onek gulo routes 
theke je kono akta route select korbe. 
routes gulo ace routes.ts file ar moddhe */
import { routes } from '../app-routing/routes';
import { from } from 'rxjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // supply routes as parameter for RouterModule
  ],
  exports: [
    RouterModule  // It will be used by app.module.ts
  ]
})
export class AppRoutingModule { }
