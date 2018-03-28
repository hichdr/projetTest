import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  form: FormGroup;
  libelles = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  createForm() {
    this.form = this.fb.group({
      name: '', // <--- the FormControl called "name"
      reference: '',
      state: State.ALIVRER
    });
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    console.log();
  }

  process(): void {
    this.nItem.emit();
    console.log();
  }
}
