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

    InitSearchBar(viewCard){
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

        this.searchBarInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                if(this.searchBarInput.value != "")
                {
                    viewCard.SortBy(this.searchBarInput.value)
                }
            }
        })
       
    }


    displayRecipes(){
        const Select = new SelectFactory();
        const viewCard =  new CardReccipesFactory()

        /* Hydrate all recipes */
        viewCard.SortBy()

        /* create all listener */
        /* for open dropdown */
        Select.initFilter()

        /* for all recipes button to filter the recipe by simple click */
        Select.initSelectEvent()

        /* create listener for the input of the searchBar */
        InitSearchBar(viewCard) 

    }
}



// affichage de View
const app = new App()
app.displayRecipes() 