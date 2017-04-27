import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { SignInService } from '../providers/sign-in.service'
import { Http, Response } from '@angular/http'

@Component({
  selector: 'waffle-form',
  templateUrl: './waffle-form.component.html',
  styleUrls: ['./waffle-form.component.scss']
})
export class WaffleFormComponent implements OnInit {

  errorMessage: String
  private: Boolean
  lists: FirebaseListObservable<any[]>
  uid: String
  inputpicture = ''

  @Output() onUrl = new EventEmitter<string>()
  @Input() isValid

  constructor(private af: AngularFire, private router: Router, private signin: SignInService, private http: Http) {
    this.lists = af.database.list('/lists')
    this.private = false
    this.uid = null
}

  ngOnInit() {
  }

  createList(listName: String, listDesc: String, listImg: String,  voteValue: boolean) {
     //console.log(isValid)
     if (listName.length > 0) {
      this.errorMessage = ''
      let id = ''
      if (this.private && this.signin.isAuth) {
        this.af.auth.subscribe(authData => {
          this.uid = authData.uid
        })
        id = this.lists.push({name: listName, desc: listDesc, picture: this.isValid ? listImg : null, vote: voteValue,
          private: this.private, owner: this.uid, lastIndex: 0}).key
        this.router.navigate(['/private-lists/' + id])
      } else if (this.private === false) {
        id = this.lists.push({name: listName, desc: listDesc, picture: this.isValid ? listImg : null,
           vote: voteValue, private: this.private,
        lastIndex: 0}).key
        this.router.navigate(['lists/' + id])
      } else {
        this.errorMessage = 'You need to connect to create a private list'
      }
    } else {
      this.errorMessage = 'Your amazing list need a title!'
    }
  }

  checkImage(e) {
    const res = e.target.value.match(/\.(png|jpg|gif|svg|jpeg)$/) ? e.target.value : null
    this.onUrl.emit(res)
  }

}
