import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatCardModule, MatButtonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  creditCards: any[] = [];
  shopForm: FormGroup;
  purchaseMessage = '';
  totalCost: number = 0;

  products = [
    { id: 1, name: 'Телефон', price: 500 },
    { id: 2, name: 'Наушники', price: 150 },
    { id: 3, name: 'Ноутбук', price: 1200 },
    { id: 4, name: 'Кофе', price: 5 },
    { id: 5, name: 'Овощи', price: 10 },
    { id: 6, name: 'Фрукты', price: 340 },
    { id: 7, name: 'Лезвия', price: 120 }
  ];

  constructor(private fb: FormBuilder, private httpService: HttpServiceService) {
    this.shopForm = this.fb.group({
      cardNumber: [null, Validators.required],
      productId: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.httpService.getCreditCards().subscribe(data => {
      this.creditCards = data.data;
      console.log(data)
    });

    this.shopForm.valueChanges.subscribe(() => {
      const productId = +this.shopForm.value.productId; 
      const product = this.products.find(p => p.id === productId);
      const qty = this.shopForm.value.quantity || 0;
      this.totalCost = product ? product.price * qty : 0;
    });
  }

  get selectedCard() {
    const cardNumber = this.shopForm.value.cardNumber;
    return this.creditCards.find(card => card.number === cardNumber);
  }

  buy() {
    if (this.shopForm.invalid) {
      this.purchaseMessage = 'Пожалуйста, заполните все поля корректно.';
      return;
    }

    if (!this.selectedCard) {
      this.purchaseMessage = 'Выберите корректную карту.';
      return;
    }

    if (this.totalCost > this.selectedCard.balance) {
      this.purchaseMessage = `Недостаточно средств на карте ${this.selectedCard.number}. Баланс: $${this.selectedCard.balance.toFixed(2)}`;
      return;
    }

    this.selectedCard.balance -= this.totalCost;

    this.purchaseMessage = `Покупка успешна! Куплено ${this.shopForm.value.quantity} шт. "${this.products.find(p => p.id === +this.shopForm.value.productId)?.name}" с карты ${this.selectedCard.number}. Остаток: $${this.selectedCard.balance.toFixed(2)}`;

    this.shopForm.patchValue({ productId: null, quantity: 1 });
  }
}
