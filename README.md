# AcademyStore

## Specification

Use Angular 2+ to build an e-commerce site with user registration (registration/auth mocking is permitted), product catalog, authentication, and roles.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

### Registration
* User can register at any time to the store (registration/auth mocking is permitted)
* Recaptcha on user registration

Three types of roles: **admin**, **manager**, **user**

### Admin
* Can CRUD (Create, Read, Update, Delete) users
* Can assign/remove roles to users
* Can CRUD products
* Can RD orders

### Manager
* Can CRU products
* Can R orders
* Can change status of an order

### User
* Can CR orders
* Update Profile
    * Billing Address
    * Shipping Address

Order checkout
Ability to add different products and different quantities to the cart
Payment using PayPal or Stripe Sandboxes

## Technical requirements

* You can use a service like Firebase to power the backend of your application, alternatively, you can create your own with your language of preference.
* Use Ngrx to manage the state.
* You can use third party UI libraries.
* Separate modules for User/Admin+Manager supporting **Lazy Loading**.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
