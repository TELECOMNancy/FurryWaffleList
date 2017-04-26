import { Component, OnInit } from '@angular/core'
import {MdDialog, MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-confirm-deletion-dialog',
  templateUrl: './confirm-deletion-dialog.component.html',
  styleUrls: ['./confirm-deletion-dialog.component.scss']
})
export class ConfirmDeletionDialogComponent implements OnInit {

  constructor(dialogRef: MdDialogRef<ConfirmDeletionDialogComponent>) {}

  ngOnInit() {
  }

}
