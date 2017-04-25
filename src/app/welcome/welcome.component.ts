import { Component, OnInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Router } from '@angular/router'
import { SignInService } from '../providers/sign-in.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  lists: FirebaseListObservable<any[]>
  errorMessage: String
  private: String
  uid: String


  constructor(private af: AngularFire, private router: Router, private signin: SignInService) {
    this.lists = af.database.list('/lists')
    this.private = 'false'
    this.uid = 'null'
  }

  ngOnInit() {
  }

  createList(listName: String, voteValue: boolean) {
     if (listName.length > 0) {
      this.errorMessage = ''
      let id = ''
      if (this.private && this.signin.isAuth) {
        this.af.auth.subscribe(authData => {
          this.uid = authData.uid
        })
        id = this.lists.push({name: listName, vote: voteValue, private: this.private, owner: this.uid}).key
        this.router.navigate(['/privatelists/' + id])
      } else if (this.private === 'false') {
        id = this.lists.push({name: listName, vote: voteValue, private: this.private}).key
        this.router.navigate(['lists/' + id])
      } else {
        this.errorMessage = 'You need to connect to create a private list'
      }
    } else {
      this.errorMessage = 'Enter a message please'
    }
  }

}
