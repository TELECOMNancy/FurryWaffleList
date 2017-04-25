import { Injectable } from '@angular/core'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class UsersService {

  constructor(public af: AngularFire) { }

  getUsers(): FirebaseListObservable<any[]>  {
    return this.af.database.list('/users')
  }

}
