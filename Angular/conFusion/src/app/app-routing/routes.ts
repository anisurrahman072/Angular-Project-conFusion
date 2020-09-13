//akhane amr shob routes gulo thakbe
// ami iccha korle app-routing.module.ts file a shob route gulo rakhte partam.
// kintu tate code clean thakto na

import { Routes } from '@angular/router'; // actually ai Routes represent kortece akdhooner dataType

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
 
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dishdetail/:id', component: DishdetailComponent}, /* "id" kotha ta ami iccha moto dici. Tobe jeita 
akhane diba seitae dishdetail.ts ar params['id'] ar moddhe avabe dite hobe */
    {path: '', redirectTo: '/home', pathMatch: 'full'} // Application will select '/home' in it's first reload
];