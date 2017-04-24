import { Component, OnInit} from '@angular/core';
import { MdListModule } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import {MdToolbarModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = ['test', 'test2', 'test3'];
  address: any;
  itemElements: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private route: ActivatedRoute) {
    const key = this.route.snapshot.params['key'];
    this.itemElements = af.database.list('/lists/' + key + '/items');
  console.log(this.itemElements.subscribe( res => {
    console.log(res);
  }));
  }

  ngOnInit() {
    this.address = this.route.snapshot.params['key'];
  }

  addElement(value: String) {
  }

  deleteElement() {

  }

}
