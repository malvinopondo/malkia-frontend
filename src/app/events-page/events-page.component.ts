import { Component } from '@angular/core';
import { EventsComponent } from "../components/events/events.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [EventsComponent, ContactFormComponent, NavbarComponent, FooterComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {

}
