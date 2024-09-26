import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthenticationService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          // Store the token safely (e.g., in local storage)
          localStorage.setItem('token', response.token);
          this.navigateToDashBoard();
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        // Optionally, display an error message to the user
      }
    });
  }

  navigateToDashBoard(){
    this.router.navigate(['dashboard'])

  }
}
