import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';

@Injectable()
export class CollectionService {
  private collection: Item[];

  constructor() {
  }

  // get collection
  getCollection(): Item[] {
    return this.collection;
  }
  // set collection
  setCollection(collection: Item[]): void {
    this.collection = collection;
  }

  // add item

  // update item

  // delete item
}
