# AngularWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

Command: `npx -p @angular/cli@latest ng new angular-workshop --routing --style scss --defaults`

## 01_Components

Generated SCAMs via

```shell
ng g m components/a-example-simple
ng g c components/a-example-simple --export

ng g m components/b-example-hooks
ng g c components/b-example-hooks --export

ng g m components/c-example-template
ng g c components/c-example-template --export

ng g m components/d-example-directives
ng g c components/d-example-directives --export
ng g d components/d-example-directives/highlighter

ng g m components/e-example-pipes
ng g c components/e-example-pipes --export
ng g p components/e-example-pipes/scale

ng g m components/demo --flat
ng g c components/demo --flat --export
```

## 02_Depdency_Injection

Generated Services/Providers

```shell
ng g s services/sample &
ng g i services/logger/logger &
ng g class services/logger/logger-token &
ng g s services/logger/logger &
ng g s services/logger/console-logger &
ng g s services/logger/alert-logger &
ng g s services/sample-with-token &

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
