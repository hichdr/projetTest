import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;
  // private _collection$: Subject<Item[]> = new Subject<Item[]>();
  // private _collection$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(null);

  constructor(
    private afs: AngularFirestore,
    // private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
    // this._collection$ = afs.itemsCollection.valueChanges();
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
  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  // update item
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  // delete item
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

  // get data on item
  getItem(id: string): Observable<Item[]> {
    const item = this.afs.doc<Item>('collection/${id}');
    return item;
  }
}
