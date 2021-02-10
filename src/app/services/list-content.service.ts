import { Injectable } from '@angular/core';
import { ListItem } from '../model/list-items';

@Injectable({
  providedIn: 'root'
})
export class ListContentService {

  constructor() { }

  public getItems(): ListItem[] {
    return [
      { key: 'first element', value: 1},
      { key: '2nd element', value: 2},
      { key: '3rd element', value: 3},
    ];
  }
}
