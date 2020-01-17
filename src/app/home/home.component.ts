import { Component } from '@angular/core';
import { Pizza } from "../models/pizza.model";
import { Author } from "../models/author.model";
import { Ingredient } from "../models/ingredient-list.model";
import { PizzaService} from "../pizza.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  title = "PizzaParty";

  selectedPizza: Pizza;
  selectedIngredients: Ingredient[] = [];

  pizzas: Pizza[] = [];

  number = 2;

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

  ingredients: Ingredient[] = [
    {
      name: "Tomate",
      image: "tomate.jpg",
      weight: "60g",
      price: 2,
      color: "danger"
    },
    {
      name: "olive",
      image: "olive.jpg",
      weight: "6g",
      price: 1,
      color: "dark"
    }
  ];

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

  constructor(private pizzaService: PizzaService) {
    console.log(this.pizzas);
    
  }

  ngOnInit() {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

}
