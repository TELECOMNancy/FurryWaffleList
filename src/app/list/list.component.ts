  import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemElements: FirebaseListObservable<any[]>
  errorMessage: String
  itemInput: string
  list: FirebaseObjectObservable<any>

  constructor(private af: AngularFire, private route: ActivatedRoute, private service: ListsService) {
    const key = this.route.snapshot.params['key']
    this.itemInput = ''
  }

  ngOnInit() {
    const key: string = this.route.snapshot.params['key']
    this.list = this.service.getList(key)
    this.itemElements = this.service.getItems(key)
}

  deleteElement(key: string) {
    this.itemElements.remove(key)
  }

  updateItem(itemkey: string, check: boolean) {
    this.itemElements.update(itemkey, {checked : !check})
  }

  addItem(event) {
    this.itemElements.push({name: this.itemInput , checked : false })
    this.itemInput = ''
  }

}
