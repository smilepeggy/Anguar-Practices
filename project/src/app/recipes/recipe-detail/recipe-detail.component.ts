import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe-list/recipe.model";
import { RecipeService } from "../recipe-list/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // console.log(this.recipe);
    console.log(this.recipe.ingredients);
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
