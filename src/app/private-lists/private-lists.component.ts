import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import { ListsService } from '../providers/lists.service'

@Component({
  selector: 'app-private-lists',
  templateUrl: './private-lists.component.html',
  styleUrls: ['./private-lists.component.scss'],
  providers: [ListsService]
})
export class PrivateListsComponent implements OnInit {

  lists: FirebaseListObservable<any[]>
  keyEditedList = ''

  constructor(private af: AngularFire , private router: Router) { }

  ngOnInit() {

    this.lists = this.af.database.list('/lists', {
  query: {
    orderByChild: 'private',
    equalTo: 'true'
  }
})
  }

  onSelect(keylist: String): void {
    this.router.navigate(['privatelists/' + keylist])
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
