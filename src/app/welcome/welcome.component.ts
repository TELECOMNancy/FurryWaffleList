import { Component, OnInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Router } from '@angular/router'
import { SignInService } from '../providers/sign-in.service'
import { trigger, state, style, animate, transition } from '@angular/animations'
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
  leftGifs: String[] = [
    'https://i.giphy.com/gpufDFw0sPBYY.gif',
    'https://i.giphy.com/125RIkH7IluIpy.gif',
    'https://i.giphy.com/3o6wrzcyVdjrEC5UaY.gif'
  ]
  leftGif: String
  rightGifs: String[] = [
    'https://i.giphy.com/l3V0o7QyRb08irLag.gif',
    'https://i.giphy.com/l9FG64wy5CT5e.gif'
  ]

  imgRegex = /\.(png|jpg|gif|svg|jpeg)$/
  rightGif: String
  lists: FirebaseListObservable<any[]>
  picture = 'https://blog.fotolia.com/fr/files/2016/08/1467830836GOT_ep_7_The_hound_s_wishful_thinking.gif'
  errorMessage: String
  private: Boolean
  uid: String
  charoy: String = 'active'


  constructor(private af: AngularFire, private router: Router, private signin: SignInService) {
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
        id = this.lists.push({name: listName, desc: listDesc, picture: listImg, vote: voteValue, private: this.private, owner: this.uid}).key
        this.router.navigate(['/private-lists/' + id])
      } else if (this.private === false) {
        id = this.lists.push({name: listName, desc: listDesc, picture: listImg , vote: voteValue, private: this.private}).key
        this.router.navigate(['lists/' + id])
      } else {
        this.errorMessage = 'You need to connect to create a private list'
      }
    } else {
      this.errorMessage = 'Enter a message please'
    }
  }

}
