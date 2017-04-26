import { Injectable } from '@angular/core'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class ListsService {

  constructor(public af: AngularFire) { }

  getLists(): FirebaseListObservable<any[]>  {
    return this.af.database.list('/lists')
  }

  getList(key: string): FirebaseObjectObservable<any> {
    return this.af.database.object('/lists/' + key)
  }

  getItems(key: string): FirebaseListObservable<any[]> {
    return this.af.database.list('/lists/' + key + '/items', {
  query: {
    orderByChild: 'index'
  }
})
  }

  getItemsObject(key: string): FirebaseObjectObservable<any[]> {
    return this.af.database.object('/lists/' + key + '/items')
  }

  getItemByIndex(key: string, index: number): FirebaseListObservable<any[]> {
    return this.af.database.list('/lists/' + key + '/items', {
      query: {
        orderByChild: 'index',
        equalTo: index
      }
    })
  }

  getUsersList(key: string): FirebaseListObservable<any[]> {
    return this.af.database.list('/lists/' + key + '/shared')
  }

  getOwner(key: string): FirebaseObjectObservable<any> {
    return this.af.database.object('/lists/' + key + '/owner', { preserveSnapshot: true })
  }

  getUsers(key: string): FirebaseListObservable<any[]> {
    return this.af.database.list('/lists/' + key + '/users')
  }

  getPrivate(key: string): FirebaseObjectObservable<any[]> {
    return this.af.database.object('/lists/' + key + '/private', { preserveSnapshot: true })
  }

}
