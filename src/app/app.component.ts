import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
constructor(private router: Router) {}

onclickLists() {
  this.router.navigate(['/lists'])
}



}
