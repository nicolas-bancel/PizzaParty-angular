import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { TestPipe } from './pipe/test.pipe';
import { TvaPipe } from './pipe/tva.pipe';
import { HomeComponent } from './home/home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    TestPipe,
    TvaPipe,
    HomeComponent,
    PizzaListComponent,
    PizzaSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //un objet représente une route
      { path: "", component: HomeComponent },
      { path: "pizza", component: PizzaListComponent },
      { path: "pizza/:id", component: PizzaSingleComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
