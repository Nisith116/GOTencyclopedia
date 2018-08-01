import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GotListViewComponent } from './got-list-view/got-list-view.component';
import { GotCardViewComponent } from './got-card-view/got-card-view.component';


import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import { GotAPIService } from './got-api.service';

import { RouterModule,Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    GotListViewComponent,
    GotCardViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot() ,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component:GotListViewComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: 'api/:id', component:GotCardViewComponent}
    ])
  ],
  providers: [GotAPIService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
