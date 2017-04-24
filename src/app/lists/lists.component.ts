import { Component, OnInit } from '@angular/core';
import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  // a voir pour un inpute sur les listes 
  LISTES = [
  'Manger' ,
  'A Boire' ,
  'Bistro' ,
  'raclette Recette' ,
  'jeloShoot' ,
  'Monster Brownie' ,
  'Omelette du fromage' 
];

  constructor() { }

  ngOnInit() {
  }

}
