import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  state = State;
  libelles = Object.values(State);
  constructor() { }

  ngOnInit() {
  }

}
