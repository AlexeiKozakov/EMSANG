import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventTableComponent } from './components/events-table/event-table/event-table.component';
import {HttpClientModule} from "@angular/common/http";
import {EventService} from "./services/event.service";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AddEventComponent } from './components/addEvent-table/add-event/add-event.component';
import { ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar-table/navbar.component';

const routes: Routes = [
  { path: 'events', component: EventTableComponent },
  { path: 'event/add', component: AddEventComponent },
  {path: '', component: NavbarComponent, pathMatch: 'full'},
  { path: 'addEvent', component: AddEventComponent },


];



@NgModule({
  declarations: [
    AppComponent,
    EventTableComponent,
    AddEventComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,


  ],
  exports: [RouterModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
