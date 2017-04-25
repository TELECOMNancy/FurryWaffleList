import { Component, Inject, OnInit } from '@angular/core'
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {


  filteredEmails: any

  users = [
    'shared',
    'Florida',
    'Georgia',
  ]

  constructor(private dialogRef: MdDialogRef<SettingsComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  addEmail(event) {
    console.log('add ' + event.target.value)
  }

}
