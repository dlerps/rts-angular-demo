import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/model/list-items';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input('item')
  public listItem: ListItem

  constructor() { }

  ngOnInit(): void {
  }

}
