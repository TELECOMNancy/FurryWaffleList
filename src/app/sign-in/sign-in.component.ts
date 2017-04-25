import { Component, OnInit } from '@angular/core'
import { AngularFire, AuthProviders } from 'angularfire2'
import { SignInService } from '../providers/sign-in.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isAuth = this.signin.isAuth
  authColor = this.signin.authColor
  user = this.signin.user

  constructor(private signin: SignInService) {
  }

  ngOnInit() {
  }

  login(from: string) {
    this.signin.login(from)
    this.isAuth = this.signin.isAuth
    this.authColor = this.signin.authColor
    this.user = this.signin.user
  }

  logout() {
    this.signin.logout()
    this.isAuth = this.signin.isAuth
    this.authColor = this.signin.authColor
    this.user = this.signin.user
  }

}
