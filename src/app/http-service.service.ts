import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {}

   private apiUrl = 'https://fakerapi.it/api/v2/creditCards?_quantity=10';

   getCreditCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
       
        response.data = response.data.map((card: any) => ({
          ...card,
          balance: this.getRandomBalance()
        }));
        return response;
      })
    );
  }


  private getRandomBalance(): number {
    return +(Math.random() * (10000 - 100) + 100).toFixed(2);
  }
}
