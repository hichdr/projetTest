import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    FormsModule
  ],
  declarations: [
    NavComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    NavComponent,
    StateDirective,
    NgbCollapseModule
  ]
})
export class SharedModule { }
