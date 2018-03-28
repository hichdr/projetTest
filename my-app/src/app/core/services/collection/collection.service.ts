import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  // private _collection: Item[];
  private _collection$: Observable<Item[]>;

  constructor(
    private afs: AngularFirestore,
    // private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = afs.itemsCollection.valueChanges();
    // this._collection$ = this.http.get('mon_url_api_rest/collection');
  }

  // get collection de type script
  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  // set collection de type script
  set collection$(collection: Observable<Item[]>) {
    this._collection$ = collection;
  }

  // add item

  // update item

  // delete item
}
