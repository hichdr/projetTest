import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  addItem(data: Item): void {
    console.log(data);
    this.collectionService.addItem(data);
  }

}
