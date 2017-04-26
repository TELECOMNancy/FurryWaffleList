import { Injectable } from '@angular/core'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class UsersService {

  constructor(public af: AngularFire) { }

  getUsers(): FirebaseListObservable<any[]>  {
    return this.af.database.list('/users')
  }

  getUsersObject(): FirebaseObjectObservable<any[]>  {
    return this.af.database.object('/users')
  }

  getUser(key: String): FirebaseObjectObservable<any[]>  {
    return this.af.database.object('/users/' + key)
  }

  addCustomKey (keyList, key, value) {
    const toSend = this.af.database.object('/lists/' + keyList  + '/shared/' + key)
    toSend.set(value)
}

}
