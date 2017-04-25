import { Component, OnInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  lists: FirebaseListObservable<any[]>
  errorMessage: String
  private: false


  constructor(private af: AngularFire, private router: Router) {
    this.lists = af.database.list('/lists')
  }

  ngOnInit() {
  }

  createList(listName: String, voteValue: boolean) {
     if (listName.length > 0) {
      this.errorMessage = ''
      let id = ''
      if (this.private) {
        id = this.lists.push({name: listName, vote: voteValue, private: this.private}).key
        // TODO: find user id
      } else {
        id = this.lists.push({name: listName, vote: voteValue, private: this.private}).key
      }
      this.router.navigate(['lists/' + id])
    } else {
      this.errorMessage = 'Enter a message please.'
    }
  }

}
