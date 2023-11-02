import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddEvent} from "../model/add-event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [];

   apiUrl = 'http://localhost:8080/api/event';
  constructor(private http: HttpClient) {}


  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.apiUrl+"/all");
  }
  addEvent(event: AddEvent): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+"/add", event, { headers });
  }


}
