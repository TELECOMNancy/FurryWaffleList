import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { ListsService } from '../../providers/lists.service'
import { SignInService } from '../../providers/sign-in.service'

@Component({
  selector: 'app-shared-lists',
  templateUrl: './shared-lists.component.html',
  styleUrls: ['./shared-lists.component.scss']
})
export class SharedListsComponent implements OnInit {
  lists: FirebaseListObservable<any[]>
  keyEditedList = ''
  userInfo: any


  constructor(private af: AngularFire, private router: Router, private signin: SignInService) { }

  ngOnInit() {
    if (this.signin.isAuth) {
      this.af.auth.subscribe(authData => {
        this.userInfo = authData.uid
      })
      this.lists = this.af.database.list('/lists')
    }
  }

  onSelect(list: any): void {
    this.router.navigate(['shared-lists/' + list.$key])
  }

  checkAccess(list: any): Boolean {
    if (list.shared && list.private) {
      return list.shared.hasOwnProperty(this.userInfo)
    }
    return false
  }

}
