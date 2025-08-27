import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from '../../http-service.service';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  type: string;
  creditcard: number;
  Validity: number;
  balance: string;
}


@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatTableModule],
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


   displayedColumns: string[] = ['type', 'creditcard', 'Validity', 'balance'];
  clickedRows = new Set<PeriodicElement>();
}
