import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-music-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './music-page.component.html',
  styleUrl: './music-page.component.scss'
})
export class MusicPageComponent {

}
