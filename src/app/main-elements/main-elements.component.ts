import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-elements',
  templateUrl: './main-elements.component.html',
  styleUrls: ['./main-elements.component.scss']
})
export class MainElementsComponent implements OnInit {

  constructor(private router: Router) { }

  onclickLists() {
  this.router.navigate(['/lists'])
}

  ngOnInit() {
  }

}
