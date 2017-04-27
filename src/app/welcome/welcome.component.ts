import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],

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
  picture
  charoy = 'inactive'
  notValid = true
  constructor() { }

  ngOnInit() {
    this.leftGif = this.leftGifs[Math.floor(Math.random() * this.leftGifs.length)]
    this.rightGif = this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)]
  }

  updateUrl(event) {
    if (event) {
     if (event.type === 'error') {
      this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)]
      this.notValid = true
     } else {
      this.picture = event
      this.notValid = false
     }
    } else {
    this.notValid = true
    }
  }

  toggle(event) {
    this.charoy = (event.x > window.innerWidth / 2) ? 'inactive' : 'active'
  }

}
