import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { Author } from './models/author.model';
import { Ingredient } from './models/ingredient-list.model';


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
  selectedIngredient: Ingredient;

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


  ingredients: Ingredient[] = [{
    name: 'Tomate',
    image: 'tomate.jpg',
    weight: '60g',
    price: 2
},
{
    name: 'olive',
    image: 'olive.jpg',
    weight: '6g',
    price: 1
}];

  selectIngredient(event: Ingredient) {
    // console.log(event);
    this.selectedIngredient = event;
  }

}

