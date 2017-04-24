import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // items = ['test', 'test2', 'test3']
  list: FirebaseObjectObservable<any>

  constructor(private route: ActivatedRoute, private service: ListsService ) {
  }

  ngOnInit() {
    const key: string = this.route.snapshot.params['key']
    this.list = this.service.getList(key)
  }

}
