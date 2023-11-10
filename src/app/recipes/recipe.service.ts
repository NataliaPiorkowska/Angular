import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fires', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
