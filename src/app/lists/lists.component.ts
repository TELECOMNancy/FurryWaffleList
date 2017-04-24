import { Component, OnInit } from '@angular/core';
import { MdListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
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

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.lists = this.af.database.list('/lists');
  }
}
