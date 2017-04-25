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
  MdInputModule,
  MdRadioModule,
  MdMenuModule,
  MdDialogModule
]

@NgModule({
  imports: modules,
  exports: modules,
  // declarations: [],
  providers: [MdDialog],
})

export class SharedModule { }
