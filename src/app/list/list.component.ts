  import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { SettingsComponent } from './settings/settings.component'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemElements: FirebaseListObservable<any[]>
  errorMessage: String
  itemInput: string
  list: FirebaseObjectObservable<any>
  users: ['roger', 'nanard', 'biture']


  constructor(private af: AngularFire, private route: ActivatedRoute, private service: ListsService, public dialog: MdDialog) {
    const key = this.route.snapshot.params['key']
    this.itemInput = ''
  }

  ngOnInit() {
    const key: string = this.route.snapshot.params['key']
    this.list = this.service.getList(key)
    this.itemElements = this.service.getItems(key)
  }

  addVote(key: string, value: number) {
    this.itemElements.update(key, {voteValue: value + 1})
  }

  deleteElement(key: string) {
    this.itemElements.remove(key)
  }

  updateItem(itemkey: string, check: boolean) {
    this.itemElements.update(itemkey, {checked : !check})
  }
 
  addItem(event) {
    this.itemElements.push({name: this.itemInput , checked : false, voteValue : 0 })
    this.itemInput = ''
  }

  showSettings() {
    const config: MdDialogConfig = {
      disableClose: false,
      width: '600px',
      data: {
        users: ['toto', 'titi']
      }
    }
    const dialogRef = this.dialog.open(SettingsComponent, config)
    /*dialogRef.afterClosed().subscribe(result => {
    })*/
  }

}
