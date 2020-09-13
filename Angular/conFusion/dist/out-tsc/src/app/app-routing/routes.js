//akhane amr shob routes gulo thakbe
// ami iccha korle app-routing.module.ts file a shob route gulo rakhte partam.
// kintu tate code clean thakto na
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
export const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dishdetail/:id', component: DishdetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Application will select '/home' in it's first reload
];
//# sourceMappingURL=routes.js.map