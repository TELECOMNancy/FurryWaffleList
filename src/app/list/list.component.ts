import { Component, OnInit} from '@angular/core'
import { MdListModule } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  address: any
  itemElements: FirebaseListObservable<any[]>
  errorMessage: String
  itemInput: string

  constructor(private af: AngularFire, private route: ActivatedRoute) {
    const key = this.route.snapshot.params['key']
    this.itemInput = ''
    this.itemElements = af.database.list('/lists/' + key + '/items')
  console.log(this.itemElements.subscribe( res => {
    console.log(res)
  }))
}

  ngOnInit() {
    this.address = this.route.snapshot.params['key']
  }



  deleteElement(key: string) {
    this.itemElements.remove(key)
  }



  updateItem(item) {
  }

  addItem(event) {
    console.log(`TODO - ADD '${this.itemInput}' item `)
    this.itemElements.push({name: this.itemInput})
    this.itemInput = ''
  }


}
