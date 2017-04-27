import { Component, OnInit } from '@angular/core'
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
  charoy: String = 'active'
  picture

  constructor() { }

  ngOnInit() {
    this.leftGif = this.leftGifs[Math.floor(Math.random() * this.leftGifs.length)]
    this.rightGif = this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)]
  }

  toggle(event) {
    this.charoy = (event.x > window.innerWidth / 2) ? 'inactive' : 'active'
  }

  updateUrl(event) {
    if (event) {
      this.picture = event.type === 'error' ?
      this.rightGifs[Math.floor(Math.random() * this.rightGifs.length)] : event
    }
  }

}
