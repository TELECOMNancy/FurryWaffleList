import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  },
  {
    path: 'lists/:key',
    component: ListComponent
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
