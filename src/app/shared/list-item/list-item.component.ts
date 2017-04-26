import { Component, OnInit, Input } from '@angular/core'
import {Router} from '@angular/router'
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() list

  keyEditedList = ''

  constructor(private router: Router, private af: AngularFire) { }

  ngOnInit() { }


  editName(keylist: string): void {
    this.keyEditedList = keylist
  }


  validChange(keylist: string, listname: String) {
    this.af.database.list('/lists').update(keylist, {name: listname})
    this.keyEditedList = ''
  }

}
