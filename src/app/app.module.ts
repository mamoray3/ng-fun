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
import { CreateEventComponent } from './events-list/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {EventRouteGaurd} from './events-list/event-details/event-route-gaurd';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeativatePage']},
  {path: 'registration', component: TemplateFormComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteGaurd]},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'registration', pathMatch: 'full'}
] ;

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NotFoundComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
    EventsService,
    EventRouteGaurd,
    {provide: 'canDeativatePage', useValue: 'checkPageIsDirty'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkPageIsDirty() {
    return false;
}
