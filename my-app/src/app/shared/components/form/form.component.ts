import { Component, OnInit, OnChanges } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  libelles = Object.values(State);
  newItem: Item;
  constructor() { }

  ngOnInit() {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  ngOnChanges() {
    console.log(this.newItem.name);
  }

  process(): void {
    console.log(this.newItem);
  }
}
