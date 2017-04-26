import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { ListComponent } from './list/list.component'
import { ListsComponent } from './lists/lists.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { PrivateListsComponent } from './private-lists/private-lists.component'
import { SharedListsComponent } from './shared-lists/shared-lists.component'


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
    path: 'privatelists/:key',
    component: ListComponent
  },
  {
    path: 'sharedlists/:key',
    component: ListComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'privatelists',
    component: PrivateListsComponent
  },
  {
    path: 'sharedlists',
    component: SharedListsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

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
