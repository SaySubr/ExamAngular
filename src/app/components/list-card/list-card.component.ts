import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
creditCards: any;

  constructor(private httpService: HttpServiceService, private router: Router){

  }

 GetDataCard() {
    this.httpService.getCreditCards().subscribe(data => {
      this.creditCards = data.data;  
    });
  }

}
