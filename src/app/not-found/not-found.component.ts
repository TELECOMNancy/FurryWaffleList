import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  url: any
  style: {}
  orly: string[]

  constructor() {
    this.url = 'https://i.giphy.com/OhVpzALRqkgHS.gif'
    this.style = {
      'background': 'url(' + this.url + ') no-repeat',
      'background-attachment': 'fixed',
      'background-size': 'cover'
    }
    this.orly = [
    'https://github.com/thepracticaldev/orly-full-res/blob/master/codingontheweekend-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/changinstuff-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/exitingvim-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/hatingotherpeoplescode-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/zindexonemillion-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/pretendingtoknowaboutstuff.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/ignoringdeprecationwarnings-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/googlingfortheregex-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/fomo-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/droptableanimals-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/tryingstuffuntilitworks-big.png?raw=true',
    'https://github.com/thepracticaldev/orly-full-res/blob/master/nobodyelsecanread-big.png?raw=true'
    ]
  }

  ngOnInit() {}

}
