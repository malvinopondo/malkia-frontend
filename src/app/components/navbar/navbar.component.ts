import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {} // Inject the Router

  // navigateHome() {
  //   console.log("home clicked")
  //   this.router.navigate(['']); // Correct the navigation method
  // }
  navigateHome() {
    this.router.navigate(['']); 
  }
  navigateToMusic(){
    this.router.navigate(['music']);
  }
  navigateToVideo(){
    this.router.navigate(['video']);
  }
  navigateToEvents(){
    this.router.navigate(['events']);
  }
  
}
