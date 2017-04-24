import { Component, OnInit } from '@angular/core'

import {MdListModule} from '@angular/material'
import {MdCardModule} from '@angular/material'
import {MdButtonModule} from '@angular/material'
import {Router} from '@angular/router'
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import { ListsService } from '../providers/lists.service'


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {


  lists: FirebaseListObservable<any[]>
  keyEditedList = ''

  constructor(private af: AngularFire , private router: Router) { }

  ngOnInit() {
    this.lists = this.af.database.list('/lists')
    this.lists.forEach(s => console.log(s['0'].$key))
  }

  onSelect(keylist: String): void {
    this.router.navigate(['lists/' + keylist])
  }

  deleteList(keylist: string): void {
    this.lists.remove(keylist)
  }
  EditName(keylist: string): void {
    this.keyEditedList = keylist
  }

  ValideChange(keylist: string, listname: String) {
     this.lists.update(keylist, {name: listname})
     this.keyEditedList = ''
  }
}
