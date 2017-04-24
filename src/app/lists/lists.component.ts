import { Component, OnInit } from '@angular/core';

import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {Router} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ListsService } from '../providers/lists.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {

  lists: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire , private router:Router) { }

  ngOnInit() {
    this.lists = this.af.database.list('/lists');
  }

  onSelect(list: String): void {
    this.router.navigate(['lists/'+list]);
  }

}
