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
        const Select = new SelectFactory();
        const viewCard =  new CardReccipesFactory()
        viewCard.AllRecipes()
        viewCard.SortBy()

        Select.initFilter()
        Select.initSelectEvent()

        this.searchBarBtn.addEventListener('click',()=> {
            if(this.searchBarInput.value != "")
            {
                viewCard.SortBy(this.searchBarInput.value)
            }
        })

        this.searchBarInput.addEventListener('change',()=> {
            if(this.searchBarInput.value == "")
            {
                viewCard.SortBy()

            }
        })
       
       

    }
}



// affichage de View
const app = new App()
app.displayRecipes() 