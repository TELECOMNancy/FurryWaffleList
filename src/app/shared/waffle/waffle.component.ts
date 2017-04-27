import { Component, OnInit, Input } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'waffle',
  templateUrl: './waffle.component.html',
  styleUrls: ['./waffle.component.scss'],
  animations: [
    trigger('charoyState', [
      state('inactive', style({
        background: 'url(/assets/logo_simple_right.png) no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      })),
      state('active', style({
        background: 'url(/assets/logo_simple.png) no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      })),
    ])
  ]
})
export class WaffleComponent implements OnInit {

  @Input() charoy: String
  constructor() { }

  ngOnInit() {
  }

}
