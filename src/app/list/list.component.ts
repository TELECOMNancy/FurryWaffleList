import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { SettingsComponent } from './settings/settings.component'
import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog/confirm-deletion-dialog.component'
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
  displayVote: boolean
  vote: FirebaseObjectObservable<any>
  listVote: boolean
  affVote: boolean


  constructor(private af: AngularFire, private route: ActivatedRoute, private service: ListsService, public dialog: MdDialog,
    private signin: SignInService, private router: Router) {
    this.itemInput = ''
  }

  ngOnInit() {
    this.displayVote = true
    this.key = this.route.snapshot.params['key']
    this.loading = false
    this.list = this.service.getList(this.key)
    this.itemElements = this.service.getItems(this.key)
    this.private = this.service.getPrivate(this.key)
    this.private.subscribe(snapshot => {
      this.privateValue = snapshot.val()
      if (this.privateValue === 'true') {
        this.owner = this.service.getOwner(this.key)
        this.owner.subscribe( snapshot => {
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
      }
      else {
        this.loading = true
    }
  })


  this.vote = this.service.getVote(this.key) // on regarde si il s'agit d'une liste de vote
  this.vote.subscribe(votecheck => {
  this.listVote = votecheck.val()
    if (this.listVote) {  // si oui alors
      this.af.auth.subscribe(authData => {  // regarder si le mec est loger
        if (this.signin.isAuth === true) {  // si oui regarder si il a voter
           this.uid = authData.uid
           this.affVote = false
           this.itemElements.subscribe(items => {
             items.forEach(elem => {
               if(elem.voted){
                 if (elem.voted[this.uid]) {
                   this.affVote = true
                 }
               }
                console.log(this.affVote)
             })

           })
        }else{ // sinon ne rien faire et afficher la page sans l'option de vote
            this.affVote = true
        }
      })
    }
  })
}

  addVote(key: string, value: number) {
    this.itemElements.update(key, { voteValue: value + 1 })
    const toSend = this.af.database.object('/lists/'+this.key+'/items/'+key+'/voted/'+this.uid)
    toSend.set(true)
  }

  removeVote(key: string, value: number) {
    this.itemElements.update(key, { voteValue: value - 1 })
    this.af.database.object('/lists/'+this.key+'/items/'+key+'/voted/'+this.uid).remove()
    this.affVote = false;
  }

  deleteElement(key: string, voter : Boolean) {
    this.itemElements.remove(key)
    this.affVote = !voter
  }

  updateItem(itemkey: string, check: boolean) {
    this.itemElements.update(itemkey, { checked: !check })
  }

  addItem(event) {
    this.itemElements.push({ name: this.itemInput, checked: false, voteValue: 0 })
    this.itemInput = ''
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
        list: this.list
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
