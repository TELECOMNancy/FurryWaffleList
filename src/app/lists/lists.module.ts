import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2'

import { SharedModule } from '../shared/shared.module'
import { ListsService } from '../providers/lists.service'
import { SignInService } from '../providers/sign-in.service'
import { UsersService } from '../providers/users.service'
import { PrivateListsComponent } from './private-lists/private-lists.component'
import { SharedListsComponent } from './shared-lists/shared-lists.component'

@NgModule({
  declarations: [
    PrivateListsComponent,
    SharedListsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [ ListsService, SignInService, UsersService],
})
export class ListsModule { }
