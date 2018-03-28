import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  collection: Item[];
  constructor(
    private collectionService: CollectionService
  ) {}

  ngOnInit() {
    this.sub = this.collectionService.collection$.subscribe((data)) => {
      this.collection = data;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
