import { __decorate } from "tslib";
/** This is our ROOT_MODULE file **/
import { BrowserModule } from '@angular/platform-browser'; // age thekei cilo
import { NgModule } from '@angular/core'; // age thekei cilo
//import { AppRoutingModule } from './app-routing.module';  // age thekei cilo
import { AppComponent } from './app.component'; // age thekei cilo
// Module supports items for html file
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module'; // For Angular Routing
import { FormsModule } from '@angular/forms'; // for Angular Template Driven Form
import { ReactiveFormsModule } from '@angular/forms'; // for Angular Reactive Form
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; // for Angular Form
import { MatInputModule } from '@angular/material/input'; // for Angular Form
import { MatCheckboxModule } from '@angular/material/checkbox'; // for Angular Form
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MenuComponent,
            DishdetailComponent,
            HeaderComponent,
            FooterComponent,
            HomeComponent,
            AboutComponent,
            ContactComponent,
            LoginComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FlexLayoutModule,
            FormsModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatListModule,
            MatGridListModule,
            MatCardModule,
            MatButtonModule,
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatProgressSpinnerModule
        ],
        providers: [
            DishService,
            PromotionService,
            LeaderService
        ],
        entryComponents: [
            LoginComponent // Now LoginComponent will be used as a MODAL
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map