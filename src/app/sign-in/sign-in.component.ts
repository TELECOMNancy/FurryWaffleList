import { Component, OnInit } from '@angular/core'
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2'
import { SafeHtmlPipe } from '../safe-html.pipe'
import { ListsService } from '../providers/lists.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isAuth = false
  authColor = 'warn'
  user: any

  constructor(public af: AngularFire, public service: ListsService, private router: Router ) {this.af.auth.subscribe(user => this.changeState(user)) }

  ngOnInit() { }

  login(from: string) {
    this.af.auth.login({
      provider: this.getProvider(from)
    })
  }

  logout() {
    this.af.auth.logout()
    this.router.navigate(['/'])
  }

  changeState(user: any = null) {
    if (user) {
      this.isAuth = true
      this.authColor = 'primary'
      this.user = this.getUserInfo(user)
      if (this.user.email) {
        // console.log(this.user)
        const listUsers: FirebaseListObservable<any[]> = this.af.database.list('users/')
        const tmp = {}
        tmp[this.user.id] = {
          email: this.user.email,
          avatar: this.user.avatar,
          name: this.user.name
        }
        listUsers.update(this.user.id, this.user)
      }

    } else {
      this.isAuth = false
      this.authColor = 'warn'
      this.user = {}
    }
  }

  getUserInfo(user: any): any {
    if (!user) {
      return {}
    }
    const data = user.auth.providerData[0]
    return {
      id: user.uid,
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    }
  }

  getProvider(from: string) {
    switch (from) {
      case 'facebook': return AuthProviders.Facebook
      case 'github': return AuthProviders.Github
      case 'google': return AuthProviders.Google
    }
  }

}
