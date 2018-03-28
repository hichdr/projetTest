import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageError404Module } from './page-error404/page-error404.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';

import { CollectionService } from './core/services/collection/collection.service';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    PageError404Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
