import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ListsService } from '../providers/lists.service'

@Component({
	selector: 'app-jsontest',
	templateUrl: './jsontest.component.html',
	styleUrls: ['./jsontest.component.scss']
})
export class JSONtestComponent implements OnInit {
	key: string
	list: FirebaseObjectObservable<any>
	itemElements: FirebaseListObservable<any[]>
	json: string

	constructor(private service: ListsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.key = this.route.snapshot.params['key']
		this.list = this.service.getList(this.key)
		this.itemElements = this.service.getItems(this.key)

		this.service.getItems(this.key).forEach(items => {
			items.forEach(item => {

			})
		})
	}
}
