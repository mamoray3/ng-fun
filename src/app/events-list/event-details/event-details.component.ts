import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../shared/services/EventsService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event;
  constructor(private eventService: EventsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEventDetails(+this.activeRoute.snapshot.params['id']);
    console.log('Returned Event' + event);
  }

}
