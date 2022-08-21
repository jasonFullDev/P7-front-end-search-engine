import recipes from "../data/recipes.js";
import CardReccipesFactory from "./Factory/CardReccipesFactory.js";
import SelectFactory from "./utils/filter.js";

export default class App{
    constructor(){
        this.recipes = recipes
       
    }
    displayRecipes(){
        const Select = new SelectFactory();
        const viewCard =  new CardReccipesFactory()
        viewCard.SortBy()
        viewCard.AllIngredient()
        viewCard.AllAppareils()
        viewCard.AllUstensiles()
        Select.initFilter()
        Select.initSelectEvent()
       
      

       
       

    }
}



// affichage de View
const app = new App()
app.displayRecipes() 