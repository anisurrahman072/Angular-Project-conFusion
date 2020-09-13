import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; /** Here 'platformBrowserDynamic' 
module is imported from the library '@angular/platform-browser-dynamic' **/

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) /**here 'platformBrowserDynamic' module enable the 
'bootstrapModule' module . So that the 'bootstrapModule' module can be applied into it's parameter. The
parameter of 'bootstrapModule' contains the ROOT_MODULE 'AppModule'. As a result 'bootstrapModule' is
fully activated for 'AppModule'**/
  .catch(err => console.error(err));
