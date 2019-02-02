import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventsService} from '../../shared/services/EventsService';
import {Injectable} from '@angular/core';

@Injectable()
export class EventRouteGaurd implements CanActivate {

constructor(private eventService: EventsService, private router: Router) {

}

  canActivate(route: ActivatedRouteSnapshot) {
      const eventExist =  !!this.eventService.getEventDetails(+route.params['id']);
      if ( !eventExist) {
        this.router.navigate(['404']);
      }
      return eventExist;
  }

}
