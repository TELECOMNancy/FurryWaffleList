import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { ListComponent } from './list/list.component'
import { JSONtestComponent } from './jsontest/jsontest.component'
import { ListsComponent } from './lists/lists.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { PrivateListsComponent } from './lists/private-lists/private-lists.component'
import { SharedListsComponent } from './lists/shared-lists/shared-lists.component'
import { MainElementsComponent } from './main-elements/main-elements.component'


const appRoutes: Routes = [
  { path: '', component:  MainElementsComponent, children: [
    {
      path: '',
      component: WelcomeComponent
    },
  {
    path: 'lists/:key',
    component: ListComponent
  },
  {
    path: 'private-lists/:key',
    component: ListComponent
  },
  {
    path: 'shared-lists/:key',
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
    path: 'private-lists',
    component: PrivateListsComponent
  },
  {
    path: 'shared-lists',
    component: SharedListsComponent
  }
        ]},
        {
    path: 'lists/:key/json',
    component: JSONtestComponent
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
