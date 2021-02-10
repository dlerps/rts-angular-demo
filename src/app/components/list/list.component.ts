import { Component, OnInit } from '@angular/core';
import { ListContentService } from 'src/app/services/list-content.service';
import {ListItem} from '../../model/list-items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public listItems: ListItem[] = [];

  constructor(private listContentSerivce: ListContentService) { }

  ngOnInit(): void {
    this.listItems = this.listContentSerivce.getItems();
  }

  public addItem(key: string, value: number): void {
    console.error(key, value)
    debugger;
    this.listItems.push({ key, value });

  }

}
