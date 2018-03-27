import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ],
  declarations: [
    NavComponent,
    StateDirective
  ],
  exports: [
    NavComponent,
    StateDirective,
    NgbCollapseModule
  ]
})
export class SharedModule { }
