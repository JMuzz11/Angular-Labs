import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hard-coded users for validation
  private users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];

  constructor(private router: Router) { }

  onLogin(): void {
    console.log('Attempting login with', this.username, this.password); // Debugging
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    
    if (user) {
      this.errorMessage = ''; // Clear error message if login is successful
      this.router.navigate(['/account']); // Redirect to account page
    } else {
      this.errorMessage = 'Invalid username or password'; // Set error message if login fails
    }
  }
}
