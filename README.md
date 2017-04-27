# Furry Waffle Amazing Lists



[![Build Status](https://travis-ci.com/TELECOMNancy/pweb-2017-team-fomo.svg?token=3ynpP6sMf9HteH2PVfmd&branch=master)](https://travis-ci.com/TELECOMNancy/pweb-2017-team-fomo)


[furrywafflelist.firebaseapp.com](https://furrywafflelist.firebaseapp.com)

## RoadMap

### J1: 

* Global list view
* List creation
* Element editing
* Adding a list element
* Deleting a list element
* List editing
* Deleting a list

### J2: 

* Oauth login
* Voting system
* Checkbox on list
* Private list
* Sharing list

### J3: 

* User management
* CSV export
* List organization
* Pseudo-API

### J4:

* Debug and final release

## How to Use the API

You can see JSON list with adding /json at the end of the list URL.

If you want to retrieve full data structure, you can use Firebase DB API.

    curl 'https://furrywafflelist.firebaseio.com/lists/[key].json'

More information on: [Firebase REST Doc](https://firebase.google.com/docs/reference/rest/database/)

## Installation

Be sure you have 'ng' command installed in your machine,
if not: 

    npm install -g @angular/cli

After that just run the following commands:

    # git clone ...
    # cd pweb-2017-team-fomo/
    # npm install
    # ng serve


## Dev notes
To skip a build, write in commit message [ci skip]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Generating Components, Directives, Pipes and Services

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

```bash
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
```
You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Authors

 - [Yannick Philippe](https://github.com/YannickPhilippe), Yannick Philippe
 - [@minious](https://github.com/minious), Eliot Godard
 - [@quentin-tardivon](https://github.com/quentin-tardivon), Quentin Tardivon
 - [@Mcdostone](https://github.com/Mcdostone), Yann Prono

<p align="center">
	<img width="45%" src="https://raw.githubusercontent.com/thepracticaldev/orly-full-res/master/fomo-big.png" alt="Amazing book!"/>
</p>
 