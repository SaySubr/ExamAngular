import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
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
  goToComplaints() {
  this.router.navigate(['complaints']);
}

}
