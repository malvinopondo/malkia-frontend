import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent {

}
