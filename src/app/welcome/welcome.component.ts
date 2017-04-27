import { Component, OnInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Router } from '@angular/router'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Subject } from 'rxjs/Subject'
import { SignInService } from '../providers/sign-in.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('charoyState', [
      state('inactive', style({
        background: 'url(assets/logo_simple_right.png) no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      })),
      state('active', style({
        background: 'url(assets/logo_simple.png) no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      })),
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  leftGifs = [
    'https://i.giphy.com/gpufDFw0sPBYY.gif',
    'https://i.giphy.com/125RIkH7IluIpy.gif',
    'https://i.giphy.com/3o6wrzcyVdjrEC5UaY.gif'
  ]
  rightGifs = [
    'https://i.giphy.com/l3V0o7QyRb08irLag.gif',
    'https://i.giphy.com/l9FG64wy5CT5e.gif'
  ]

  leftGif: any
  rightGif: any
  lists: FirebaseListObservable<any[]>
  picture = ''
  errorMessage: String
  private: Boolean
  uid: String
  charoy: String = 'active'

  constructor(private af: AngularFire, private router: Router, private signin: SignInService, private http: Http) {
    this.lists = af.database.list('/lists')
    this.private = false
    this.uid = 'null'
  }

  ngOnInit() {
    this.leftGif = this.leftGifs[Math.floor(Math.random() * this.leftGifs.length)]
    this.rightGif = this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)]
  }

  toggle(event) {
    this.charoy = (event.x > window.innerWidth / 2) ? 'inactive' : 'active'
  }

  createList(listName: String, listDesc: String, listImg: String,  voteValue: boolean) {
     if (listName.length > 0) {
      this.errorMessage = ''
      let id = ''
      if (this.private && this.signin.isAuth) {
        this.af.auth.subscribe(authData => {
          this.uid = authData.uid
        })
        id = this.lists.push({name: listName, desc: listDesc, picture: listImg, vote: voteValue,
          private: this.private, owner: this.uid, lastIndex: 0}).key
        this.router.navigate(['/private-lists/' + id])
      } else if (this.private === false) {
        id = this.lists.push({name: listName, desc: listDesc, picture: listImg , vote: voteValue, private: this.private,
        lastIndex: 0}).key
        this.router.navigate(['lists/' + id])
      } else {
        this.errorMessage = 'You need to connect to create a private list'
      }
    } else {
      this.errorMessage = 'Enter a message please'
    }
  }

  updateUrl(event) {
    this.picture = this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)]
  }

  checkImage(e) {
    this.picture = e.target.value.match(/\.(png|jpg|gif|svg|jpeg)$/) ? e.target.value : null
  }

}
