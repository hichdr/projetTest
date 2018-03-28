import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      reference: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      state: State.ALIVRER
    });
  }

  isError(fieldName: string): Boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
  }

  process(): void {
    this.nItem.emit(this.form.value);
  }
}
