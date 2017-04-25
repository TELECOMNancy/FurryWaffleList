import { Injectable } from '@angular/core'
import { AngularFire, AuthProviders } from 'angularfire2'

@Injectable()
export class SignInService {

  isAuth = false
  authColor = 'warn'
  user = {}

  constructor(public af: AngularFire) {this.af.auth.subscribe(user => this.changeState(user)) }

  changeState(user: any = null) {
    if (user) {
      this.isAuth = true
      this.authColor = 'primary'
      this.user = this.getUserInfo(user)
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
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    }
  }

  getUserId(): string {
    if (!this.isAuth) {
      return ''
    }
      this.af.auth.subscribe(authData => {
      console.log(authData)
      const uid = authData.uid
      return uid
      })
  }

  getProvider(from: string) {
    switch (from) {
      case 'twitter': return AuthProviders.Twitter
      case 'facebook': return AuthProviders.Facebook
      case 'github': return AuthProviders.Github
      case 'google': return AuthProviders.Google
    }
  }
}
