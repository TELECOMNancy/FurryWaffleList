import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'lists/:key',
    component: ListComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: [
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
