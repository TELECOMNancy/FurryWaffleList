import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { ListsService } from '../../providers/lists.service'
import { SignInService } from '../../providers/sign-in.service'

@Component({
  selector: 'app-private-lists',
  templateUrl: './private-lists.component.html',
  styleUrls: ['./private-lists.component.scss'],
  providers: [ListsService]
})
export class PrivateListsComponent implements OnInit {

  lists: FirebaseListObservable<any[]>
  keyEditedList = ''
  userInfo: any


  constructor(private af: AngularFire, private router: Router, private signin: SignInService) {
  }

  ngOnInit() {
    if (this.signin.isAuth) {
      this.af.auth.subscribe(authData => {
        this.userInfo = authData.uid
      })
      this.lists = this.af.database.list('/lists', {
        query: {
          orderByChild: 'owner',
          equalTo: this.userInfo
        }
      })
    }
  }

  onSelect(list: any): void {
    this.router.navigate(['private-lists/' + list.$key])
  }

}
