import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {}

   private apiUrl = 'https://fakerapi.it/api/v2/creditCards?_quantity=10';

   getCreditCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
