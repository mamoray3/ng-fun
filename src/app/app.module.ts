import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './events-list/event-details/event-details.component';
import {Route, RouterModule} from '@angular/router';
import {EventsService} from './shared/services/EventsService';
import { EventThumbnailComponent } from './events-list/event-thumbnail/event-thumbnail.component';

const routes: Route[] = [
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: 'events', pathMatch: 'full'}
] ;

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes )
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

