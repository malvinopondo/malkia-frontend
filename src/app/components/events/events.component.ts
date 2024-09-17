import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events = [
    { date: '2024-10-01', location: 'Club XYZ', description: 'Epic night with DJ Awesome!' },
    { date: '2024-10-15', location: 'Beach Party', description: 'Sunset beats by DJ Awesome.' },
    { date: '2024-11-05', location: 'Rooftop Lounge', description: 'Exclusive session with DJ Awesome.' }
  ];

}
