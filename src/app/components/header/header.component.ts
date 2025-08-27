import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToCards() {
    this.router.navigate(['/cards']);
  }

  goToWelcome(){
    this.router.navigate(['welcome'])
  }
  goToShop(){
    this.router.navigate(['shop'])
  }
}
