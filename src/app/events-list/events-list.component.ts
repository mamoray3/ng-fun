import { Component, OnInit } from '@angular/core';
import {EventsService} from '../shared/services/EventsService';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    events;
  constructor(private eventService: EventsService) {
    }

  ngOnInit() {
  this.events = this.eventService.getEvents();
  }

}
