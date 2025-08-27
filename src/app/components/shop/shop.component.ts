import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
    creditCards: any[] = [];
    shopForm: FormGroup;
    purchaseMessage = '';

  products = [
    { id: 1, name: 'Телефон', price: 500 },
    { id: 2, name: 'Наушники', price: 150 },
    { id: 3, name: 'Ноутбук', price: 1200 },
    { id: 4, name: 'Кофе', price: 5 },
    { id: 5, name: 'Овощи', price: 10},
    { id: 6, name: 'Фрукты', price: 340}
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
    });
  }

  get selectedCard() {
    return this.creditCards.find(card => card.number === this.shopForm.value.cardNumber);
  }

  get totalCost(): number {
    const product = this.products.find(p => p.id === this.shopForm.value.productId);
    const qty = this.shopForm.value.quantity || 0;
    return product ? product.price * qty : 0;
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

    this.purchaseMessage = `Покупка успешна! Куплено ${this.shopForm.value.quantity} шт. "${this.products.find(p => p.id === this.shopForm.value.productId)?.name}" с карты ${this.selectedCard.number}. Остаток: $${this.selectedCard.balance.toFixed(2)}`;

    this.shopForm.patchValue({ productId: null, quantity: 1 });
  }

}


