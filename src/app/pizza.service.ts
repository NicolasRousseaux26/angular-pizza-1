import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) { }

  // Appel AJAX sur l'api pour TOUTES les pizzas
  getPizzas(): Promise<Pizza[]> {
    return this.http.get('http://localhost:3000/pizzas').toPromise().then(
      response => response as Pizza[]
    );
  }

  // Récupèrer une SEULE pizza
  getPizza(id): Promise<Pizza> {
    return this.http.get('http://localhost:3000/pizzas/'+id).toPromise().then(
      response => response as Pizza
    );
  }
}
