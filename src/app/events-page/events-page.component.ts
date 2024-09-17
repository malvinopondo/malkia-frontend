import { Component } from '@angular/core';
import { EventsComponent } from "../components/events/events.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [EventsComponent, ContactFormComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {

}
