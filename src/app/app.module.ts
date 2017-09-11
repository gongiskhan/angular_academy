import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './reducers/index';
import { UserEffects } from './effects/user';
import { ProductEffects } from './effects/product';
import { CartEffects } from './effects/cart';
import { AppComponent } from './app.component';
import { APP_STATES } from './app.state';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { uiRouterConfigFn } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, ProductEffects, CartEffects]),
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'store' },
      config: uiRouterConfigFn,
    })
  ],
  providers: [
    AuthenticationService,
    UserService,
    ProductService,
    CartService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
