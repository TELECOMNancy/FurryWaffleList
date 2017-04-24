import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
  ],
  exports: [
    MdListModule,
    MdCardModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
  ],
  declarations: []
})
export class SharedModule { }
