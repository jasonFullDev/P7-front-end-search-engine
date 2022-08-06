import recipes from "../data/recipes.js";
import CardReccipesFactory from "./Factory/CardReccipesFactory.js";
import SelectFactory from "./utils/filter.js";

export default class App{
    constructor(){
        this.recipes = recipes
    }
    displayRecipes(){
        const viewCard =  new CardReccipesFactory()
        viewCard.AllRecipes()
        viewCard.AllIngredient()
        const Select = new SelectFactory();
        Select.initSelectEvent()

    }
}

// affichage de View
const app = new App()
app.displayRecipes() 