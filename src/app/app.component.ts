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
  selectedIngredients: Ingredient[] = [];

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
    price: 2,
    color: 'danger'
},
{
    name: 'olive',
    image: 'olive.jpg',
    weight: '6g',
    price: 1,
    color: 'dark'
}];

  selectIngredient(event: Ingredient) {
    // console.log(event);
    if (!this.selectedIngredients.includes(event)) {
      this.selectedIngredients.push(event);
    } 
  }

  deleteIngredient(index: number, event) {
    event.stopPropagation();
    //on supprime l'index du tableau
    this.selectedIngredients.splice(index, 1);
  }

}

