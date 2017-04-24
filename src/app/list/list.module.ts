import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AngularFireModule } from 'angularfire2'
import { ListComponent } from './list.component'
import { SharedModule } from '../shared/shared.module'
import { ListsService } from '../providers/lists.service'


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    SharedModule,
  ],
  providers: [ListsService],
})
export class ListModule { }
