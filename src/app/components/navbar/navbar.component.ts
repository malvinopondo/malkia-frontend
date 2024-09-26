import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {} // Inject the Router

  isNavbarOpen = false;

    toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
    }

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
