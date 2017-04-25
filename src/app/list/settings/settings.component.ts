import { Component, Inject, OnInit } from '@angular/core'
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'
import { FirebaseListObservable } from 'angularfire2'
import { UsersService } from '../../providers/users.service'
import { ListsService } from '../../providers/lists.service'
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  filteredEmails: any
  users: any[]

  constructor(private dialogRef: MdDialogRef<SettingsComponent>, @Inject(MD_DIALOG_DATA) public data: any,
  public service: UsersService, public serviceList: ListsService) {
    this.service.getUsers().subscribe(snapshots => this.users = snapshots)
}

  addEmail(event) {
    const u = this.users.find( u => u.email === event.target.value)
    console.log(u, this.users)
    if (u) {
      //this.serviceList.getUsers(this.data.key).update(u.id, 0)
      this.serviceList.getUsers(this.data.key).push(u.id)
    }
  }

}
