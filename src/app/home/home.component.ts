import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { MusicComponent } from "../components/music/music.component";
import { VideosComponent } from "../components/videos/videos.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MusicComponent, VideosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
