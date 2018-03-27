import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageErrorRoutingModule } from './page-error-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageErrorRoutingModule
  ],
  declarations: [
    PageError404Component
  ]
})
export class PageError404Module { }
