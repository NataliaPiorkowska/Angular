import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipes/recipe-list/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipes/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipes/recipe-list/recipe-list/recipe-item/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-list/shopping-edit/shopping-edit/shopping-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
