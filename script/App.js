import recipes from "../data/recipes.js";
import CardReccipesFactory from "./Factory/CardReccipesFactory.js";
import SelectFactory from "./utils/filter.js";

export default class App{
    constructor(){
        this.recipes = recipes
        this.searchBar =document.querySelector('#searchBar')
        this.searchBarInput =  searchBar.querySelector('input')
        this.searchBarBtn = searchBar.querySelector('#searchBar .fa-search')
        this.searchBarIngredients = document.querySelector('#searchIngredients')
        this.searchBarAppareils = document.querySelector('#searchAppareils')
        this.searchBarUstensiles = document.querySelector('#searchUstensiles')
    }
    displayRecipes(){
        const Select = new SelectFactory();
        const viewCard =  new CardReccipesFactory()
        viewCard.SortByV1()

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
            else
            {
                viewCard.SortBy(this.searchBarInput.value)
            }
        })

        this.searchBarIngredients.addEventListener('change', () => {
            if(this.searchBarIngredients.value == "")
            {
                viewCard.SortBy()
            }
            else
            {
                viewCard.search('Ingredients',this.searchBarInput.value)
            }
        })

        
        this.searchBarAppareils.addEventListener('change', () => {
            if(this.searchBarAppareils.value == "")
            {
                viewCard.SortBy()
            }
            else
            {
                viewCard.search("Appareils",this.searchBarAppareils.value)
            }
        })

        this.searchBarUstensiles.addEventListener('change', () => {
            if(this.searchBarUstensiles.value == "")
            {
                viewCard.SortBy()
            }
            else
            {
                viewCard.search("Ustensiles",this.searchBarUstensiles.value)
            }
        })

       
       

    }
}



// affichage de View
const app = new App()
app.displayRecipes() 