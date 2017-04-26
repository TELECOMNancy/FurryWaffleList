import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { SettingsComponent } from './settings/settings.component'
import { SignInService } from '../providers/sign-in.service'
import {MdProgressSpinnerModule} from '@angular/material'
import { CsvExport } from '../csv-export'

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
  private: FirebaseObjectObservable<any>
  privateValue: string
  key: string
  owner: FirebaseObjectObservable<any>
  ownerKey: string
  uid = ''
  loading: boolean
  listName: string


  constructor(private af: AngularFire, private route: ActivatedRoute, private service: ListsService, public dialog: MdDialog,
    private signin: SignInService, private router: Router) {
    this.itemInput = ''
  }

  ngOnInit() {
    this.key = this.route.snapshot.params['key']
    this.loading = false
    this.list = this.service.getList(this.key)
    this.itemElements = this.service.getItems(this.key)
    this.private = this.service.getPrivate(this.key)
    this.private.subscribe(snapshot => {
      this.privateValue = snapshot.val()
      if (this.privateValue === 'true') {
      this.owner = this.service.getOwner(this.key)
      this.owner.subscribe(snapshot => {
        this.ownerKey = snapshot.val()
        this.af.auth.subscribe(authData => {
          if (this.signin.isAuth === true) {
             this.uid = authData.uid
          }
        })
        if (this.uid === '' || this.ownerKey !== this.uid) {
          this.router.navigate(['/'])
        }
        this.loading = true
      })
    }else {
      this.loading = true
    }
  })
}

  addVote(key: string, value: number) {
    this.itemElements.update(key, { voteValue: value + 1 })
  }

  deleteElement(key: string) {
    this.itemElements.remove(key)
  }

  updateItem(itemkey: string, check: boolean) {
    this.itemElements.update(itemkey, { checked: !check })
  }

  addItem(event) {
    this.itemElements.push({ name: this.itemInput, checked: false, voteValue: 0 })
    this.itemInput = ''
  }

  showSettings() {
    const config: MdDialogConfig = {
      disableClose: false,
      width: '600px',
      data: {
        key: this.key,
        list: this.list
      }
    }
    const dialogRef = this.dialog.open(SettingsComponent, config)
    /*dialogRef.afterClosed().subscribe(result => {
    })*/
  }

export2CSV() {
    let data = []
    this.list.subscribe(list => {this.listName = list.name
      this.service.getItems(list.$key).forEach(items => {
        items.forEach(item => {
          const elem = { name: item.name, checked: item.checked, voteValue: item.voteValue}
          data.push(elem)
        })
        const test = new CsvExport()
        test.exportCsvData(this.listName, data)
      })
  })
  }

}
