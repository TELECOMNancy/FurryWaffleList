import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  lists: FirebaseListObservable<any[]>;
  errorMessage: String;


  constructor(private af: AngularFire, private router: Router) {
    this.lists = af.database.list('/lists');
  }

  ngOnInit() {
  }

  createList(listName: String) {
     if (listName.length > 0) {
      this.errorMessage = '';
      const id = this.lists.push({name: listName}).key;
      this.router.navigate(['lists/' + id]);
    } else {
      this.errorMessage = 'Enter a message please.';
    }
  }

}
