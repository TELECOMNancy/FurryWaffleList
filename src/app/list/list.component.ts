import { Component, OnInit} from '@angular/core';
import { MdListModule } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items = ['test', 'test2', 'test3'];
  address: any;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.params['key']);
  }

  ngOnInit() {
    this.address = this.route.snapshot.params['key'];
    console.log(this.address);
  }

}
