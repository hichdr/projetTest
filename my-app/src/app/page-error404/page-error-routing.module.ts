import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageError404Component } from './page-error404/page-error404.component';

const appRoutes: Routes = [
  { path: '**', component: PageError404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class PageErrorRoutingModule { }
