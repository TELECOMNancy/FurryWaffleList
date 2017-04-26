import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListItemComponent } from './list-item.component'
import { MdCardModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  exports: [ ListItemComponent ],
  declarations: [ListItemComponent]
})
export class ListItemModule { }
