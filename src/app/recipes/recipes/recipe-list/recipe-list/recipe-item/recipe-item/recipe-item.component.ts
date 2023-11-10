import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Recipe } from 'src/app/recipes/recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!:Recipe;

  constructor(private recipeService:RecipeService){}

  onSelectedRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe)

  }

}
