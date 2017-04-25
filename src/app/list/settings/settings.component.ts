import { Component, Inject } from '@angular/core'
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  userEmailInput: string
  users: string[]
  constructor(private dialogRef: MdDialogRef<SettingsComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.users = this.data.users
  }

}
