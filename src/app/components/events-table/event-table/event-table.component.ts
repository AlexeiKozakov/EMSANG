import {Component, OnInit} from '@angular/core';
import {Event} from "../../../model/event";
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit{

  events : Event[] = [];
  constructor(private eventService : EventService) {
  }
  ngOnInit()  {
     this.eventService.getEvents().subscribe((data:Event[]) => {
       this.events = data;


     });
  }

}
