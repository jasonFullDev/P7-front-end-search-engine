import recipes from "../data/recipes.js";
import CardReccipesFactory from "./Factory/CardReccipesFactory.js";
import SelectFactory from "./utils/filter.js";

export default class App{
    constructor(){
        this.recipes = recipes
        this.searchBar =document.querySelector('#searchBar')
        this.searchBarInput =  searchBar.querySelector('input')
        this.searchBarBtn = searchBar.querySelector('#searchBar .fa-search')
    }
    displayRecipes(){
        const viewCard =  new CardReccipesFactory()
        viewCard.AllRecipes()
        viewCard.SortBy()

        this.searchBarBtn.addEventListener('click',()=> {
            if(this.searchBarInput.value != "")
            {
                viewCard.SortBy(this.searchBarInput.value)
            }
        })

        const Select = new SelectFactory();
        Select.initSelectEvent()

    }
}



// affichage de View
const app = new App()
app.displayRecipes() 