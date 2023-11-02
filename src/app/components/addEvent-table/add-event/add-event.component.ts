import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {AddEvent} from "../../../model/add-event";
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {Observable} from "rxjs";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  eventAddForm: FormGroup;
  addEvent$: Observable<any> = new Observable();







  // constructor(private eventService: EventService, private fb: FormBuilder) {
  //   this.eventAddForm = this.fb.group({
  //     name: ['', Validators.required],
  //     eventType: [''],
  //     price: [''],
  //     date: [''],
  //     participantLimit: ['']
  //   });
  // }

  ngOnInit(): void {
  }
  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
    this.eventAddForm = this.formBuilder.group({
      name: ['Some', Validators.required],
      eventType: ['SomeType', Validators.required],
      price: [10, Validators.min(0)],
      date: ['2023-11-22', Validators.required],
      participantLimit: [55, Validators.min(0)]
    });
  }

  // onSubmit() {
  //   if (this.eventAddForm.valid) {
  //     console.log(this.eventAddForm.value);
  //     // Here, you can submit the form data or perform any other actions
  //   }
  // }
  onSubmit() {
    if (this.eventAddForm.valid) {
      const addEvent = new AddEvent(
        this.eventAddForm.value.name,
        this.eventAddForm.value.eventType,
        this.eventAddForm.value.price,
        this.eventAddForm.value.date,
        this.eventAddForm.value.participantLimit
      );

      this.addEvent$ = this.eventService.addEvent(addEvent);
    }
  }

  // onSubmit () {
  //   if (this.eventAddForm.valid) {
  //     // If the form is valid, create an instance of AddEvent using form values
  //     let addEvent = new AddEvent(
  //       this.eventAddForm.value.name,
  //       this.eventAddForm.value.eventType,
  //       this.eventAddForm.value.price,
  //       this.eventAddForm.value.date,
  //       this.eventAddForm.value.participantLimit
  //     );
  //
  //     this.eventService.addEvent(addEvent).subscribe(
  //       response => {
  //         // Handle success response
  //         console.log('Event added successfully', response);
  //       },
  //       error => {
  //         // Handle error response
  //         console.error('Error adding event', error);
  //       }
  //     );
  //   }
  // }




}
