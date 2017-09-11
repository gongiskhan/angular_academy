import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Fixed navbar -->
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <a class="navbar-brand" uiSref="store">Academy Store</a>
      <div class="nav navbar-nav">
        <a class="nav-link" uiSref="products">Products</a>
      </div>
      <div class="nav navbar-nav navbar-right">
        <a class="nav-link" uiSref="login">Sign in</a>
      </div>
    </nav>
    <ui-view></ui-view>
  `,
  styles: []
})
export class AppComponent { }
