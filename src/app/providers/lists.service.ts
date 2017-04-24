import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class ListsService {

  lists: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) { }


  getLists(): FirebaseListObservable<any[]>  {
    return this.af.database.list('/lists');
  }

}
