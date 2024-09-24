import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  events = [
    { 
      date: '2024-10-01', 
      location: 'Club XYZ', 
      description: 'Epic night with DJ Awesome!', 
      poster: 'https://i.pinimg.com/474x/6d/6d/69/6d6d693af8e4c6d63b04466d3ad5b281.jpg'
    },
    { 
      date: '2024-10-15', 
      location: 'Beach Party', 
      description: 'Sunset beats by DJ Awesome.', 
      poster: 'https://i.pinimg.com/474x/6d/6d/69/6d6d693af8e4c6d63b04466d3ad5b281.jpg'
    },
    { 
      date: '2024-11-05', 
      location: 'Rooftop Lounge', 
      description: 'Exclusive session with DJ Awesome.', 
      poster: 'https://i.pinimg.com/474x/6d/6d/69/6d6d693af8e4c6d63b04466d3ad5b281.jpg'
    }
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
