import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { Author } from './models/author.model';


const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "PizzaParty";

  selectedPizza: Pizza;

  pizzas: Pizza[] = PIZZAS;

  authorTable: Author = {
    id: 1,
    name: "Nicolas",
    surname: "Bancel",
    date: 25,
    avatar: "avatar"
  };

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
  }
}

