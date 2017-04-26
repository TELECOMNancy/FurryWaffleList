import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2'

import { ListComponent } from './list.component'
import { SharedModule } from '../shared/shared.module'
import { ListsService } from '../providers/lists.service'
import { SignInService } from '../providers/sign-in.service'
import { UsersService } from '../providers/users.service'
import { SettingsComponent } from './settings/settings.component'
import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog/confirm-deletion-dialog.component'


@NgModule({
  declarations: [
    ListComponent,
    SettingsComponent,
    ConfirmDeletionDialogComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ ListsService, SignInService, UsersService],
  entryComponents: [ SettingsComponent, ConfirmDeletionDialogComponent ]
})
export class ListModule { }
