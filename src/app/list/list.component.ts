import { Component, OnInit } from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { SettingsComponent } from './settings/settings.component'
import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog/confirm-deletion-dialog.component'
import { SignInService } from '../providers/sign-in.service'
import { UsersService } from '../providers/users.service'
import {MdProgressSpinnerModule} from '@angular/material'
import { CsvExport } from '../csv-export'
import 'rxjs/add/operator/first'

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
  key: string
  uid = ''
  users: any
  loading: boolean
  listName: string
  lastIndex = 0
  displayVote: boolean
  vote: FirebaseObjectObservable<any>
  listVote: boolean
  canVote: boolean


  constructor(
    private af: AngularFire,
    private route: ActivatedRoute,
    private service: ListsService,
    public dialog: MdDialog,
    public usersService: UsersService,
    private signin: SignInService, private router: Router) {
      this.itemInput = ''
      this.users = usersService.getUsersObject()
  }

  ngOnInit() {
    this.displayVote = true
    this.key = this.route.snapshot.params['key']
    this.itemElements = this.service.getItems(this.key)
    this.loading = false
    this.list = this.service.getList(this.key)
    this.list.subscribe(l => {
      this.checkAuthorization(l)
      this.processVotes(l)
      this.initLastIndex()
    })
  }

  initLastIndex() {
    this.itemElements.first().subscribe(item => {
      this.lastIndex = item[item.length - 1].index + 1
    })
  }

  processVotes(l: any) {
    if (l.vote) {
      this.af.auth.subscribe(authData => {  // regarder si le mec est loger
        if (this.signin.isAuth === true) {  // si oui regarder si il a voter
          this.uid = authData.uid
          this.canVote = true
          this.itemElements.subscribe(items => {
            items.forEach(elem => {
              if (elem.voted) {
                if (elem.voted[this.uid]) {  this.canVote = false  }
              }
            })
          })
        } else {
          this.canVote = true
        }
      })
    }
  }

  checkAuthorization(l: any) {
    if (l.private) {
      this.af.auth.subscribe(authData => {
        if (this.signin.isAuth === true) {
          this.uid = authData.uid
        }
      })
      if (!(l.owner === this.uid || (l.shared && l.shared[this.uid]))) {
        this.router.navigate(['/'])
      }
      this.loading = true
    } else {
      this.loading = true
    }
  }

  toggleVote(item, hasVoted) {
    console.log(item, hasVoted, this.canVote)
    if (hasVoted && !this.canVote) {
      this.itemElements.update(item.$key, { voteValue: item.voteValue - 1 })
      this.af.database.object('/lists/' + this.key + '/items/' + item.$key + '/voted/' + this.uid).remove()
      this.canVote = true
  } else {
      if (this.canVote) {
        this.itemElements.update(item.$key, { voteValue: item.voteValue + 1 })
        this.af.database.object('/lists/' + this.key + '/items/' + item.$key + '/voted/' + this.uid).set(true)
        this.canVote = false
      }
    }
  }

  /*addVote(key: string, value: number) {
    this.itemElements.update(key, { voteValue: value + 1 })
    const toSend = this.af.database.object('/lists/'+this.key+'/items/'+key+'/voted/'+this.uid)
    toSend.set(true)
  }

  removeVote(key: string, value: number) {
    this.itemElements.update(key, { voteValue: value - 1 })
    this.af.database.object('/lists/'+this.key+'/items/'+key+'/voted/'+this.uid).remove()
    this.affVote = false;
  }*/

  deleteElement(key: string, voter: Boolean) {
    this.itemElements.remove(key)
    this.canVote = !voter
  }

  updateItem(itemkey: string, check: boolean) {
    this.itemElements.update(itemkey, { checked: !check })
  }

  updateItemIndex(itemkey: string, index: number) {
    this.itemElements.update(itemkey, {index: index})
  }

  increaseIndex(itemkey: string, index: number) {
    this.itemElements.first().subscribe( items => {
        const source = items.find(x => x.$key === itemkey)
        const dest = items.find(x => x.index === source.index - 1)

        this.itemElements.update(source.$key, {index: source.index - 1 })
        this.itemElements.update(dest.$key, {index: source.index})
    })
  }

  decreaseIndex(itemkey: string, index: number) {
    this.itemElements.first().subscribe( items => {
        const source = items.find(x => x.$key === itemkey)
        const dest = items.find(x => x.index === source.index + 1)

        this.itemElements.update(source.$key, {index: source.index + 1 })
        this.itemElements.update(dest.$key, {index: source.index})
    })
  }

  addItem(event) {
    this.itemElements.push({ name: this.itemInput, checked: false, voteValue: 0, index: this.lastIndex })
    this.itemInput = ''
    this.lastIndex += 1
  }

  checkVoted(item: any): Boolean {
    if(item.voted){
        return item.voted.hasOwnProperty(this.uid)
    }
    return false
  }

  showSettings() {
    const config: MdDialogConfig = {
      disableClose: false,
      data: {
        key: this.key,
        list: this.list,
        uid: this.uid
    }
    }
    const dialogRef = this.dialog.open(SettingsComponent, config)
  }

  showDeletionDialog() {
    const config: MdDialogConfig = {
      disableClose: false,
    }
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent, config)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.getLists().remove(this.key)
        this.router.navigate(['/'])
    }
    })
  }

export2CSV() {
    const data = []
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
