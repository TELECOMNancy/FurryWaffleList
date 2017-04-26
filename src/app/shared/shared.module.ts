import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MdButtonModule } from '@angular/material'
import { MdSidenavModule } from '@angular/material'
import { MdIconModule } from '@angular/material'
import { MdCheckboxModule } from '@angular/material'
import { MdListModule } from '@angular/material'
import { MdCardModule } from '@angular/material'
import { MdInputModule } from '@angular/material'
import { MdToolbarModule } from '@angular/material'
import { MdRadioModule } from '@angular/material'
import { MdMenuModule } from '@angular/material'
import { MdDialogModule } from '@angular/material'
import { MdAutocompleteModule } from '@angular/material'
import { MdDialog, MdDialogRef } from '@angular/material'
import { MdProgressSpinnerModule } from '@angular/material'
import { ListItemModule } from './list-item/list-item.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { KeysPipe } from './keys.pipe'


const modules = [
  CommonModule,
  MdAutocompleteModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdCheckboxModule,
  BrowserAnimationsModule,
  MdInputModule,
  MdRadioModule,
  MdMenuModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  ListItemModule,
]

@NgModule({
  imports: modules,
  exports: [  KeysPipe, modules, ListItemModule],
  // declarations: [],
  providers: [MdDialog],
  declarations: [KeysPipe],
})

export class SharedModule { }
