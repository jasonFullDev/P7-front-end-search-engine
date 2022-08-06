import recipes from '../../data/recipes.js';
import SelectFactory from "../utils/filter.js";


export default class CardReccipesFactory {
    constructor() {
        this.recipesData = recipes
        this.wrapper = document.getElementById('cardRecipes')
        this.ListIngredients = document.getElementById('filter-list-ingredients')
        this.ListAppareils = document.getElementById('filter-list-appareils')
        this.ListUstensiles = document.getElementById('filter-list-ustensiles')
    } 
    /**
     * @param {Arrray} Arrray media of data
     * affichage des cardRecipes avec leurs informations
     */
    
    

    async SortBy(searchTerm = false){

        const Select = new SelectFactory();


     


        /* init var and front */
        const max = 30;
        let u = 0;
        let y = 0
        let g = 0;

        this.wrapper.innerHTML = ""
        this.ListIngredients.innerHTML = "";
        this.ListAppareils.innerHTML = "";
        this.ListUstensiles.innerHTML = "";

        /* ======================================== */

        this.recipesData.forEach(recipe => {

            let havebeenadded = false;

            const card = `
            <article id="card" class="col-lg-3 col-md-6 m-4">
            
            <img class="card-img-top" src="./assets/images/img-recipes.jpg" alt="default image" role="image"/>
            
            <div class="row infoDescription p-3">
            
            <h5 class="col-md-8 title mb-3 d-flex align-items-center">${recipe.name}</h5>
            
            <div class="col-md-4 time mb-3 d-flex justify-content-end">
                <b class="d-flex align-items-center justify-content-between"> 
                    <span><i class="far fa-clock"></i>  ${recipe.time} min</span>
                </b>
            </div>
            
            <ul class="col-md-6 mb-3" id="ingredients-${recipe.id}">
            
            </ul>
            
            <p id="description" class="col-md-6">${recipe.description.substring(0,160)+ "..."}</p>
            
            </div>
            
            </article>`

                  
     
        recipe.ingredients.forEach((ingredient) => {
                
            if(ingredient.ingredient.includes(searchTerm) | searchTerm == false)
            {
                if(u != max)
                {
                    const ingredientDiv = document.createElement('div')
                    ingredientDiv.setAttribute('value',recipe.id)
                    ingredientDiv.setAttribute('class','filter-list__item')
                    ingredientDiv.setAttribute('tabindex','0')
                    ingredientDiv.setAttribute('role','button')

                    if(ingredient.ingredient.includes('('))
                    {
                        ingredientDiv.innerHTML = ingredient.ingredient.split('(')[0].trim()
                    }
                    else
                    {
                        ingredientDiv.innerHTML = ingredient.ingredient.trim()
                    }

                    
                  

                    if(this.ListIngredients.children.length == 0)
                    {
                        this.ListIngredients.append(ingredientDiv)

                        if(!havebeenadded)
                        {   
                            // insert in DOM allCardRecipes
                            this.wrapper.insertAdjacentHTML('beforeEnd', card)
                            havebeenadded = true;
                            // cut the long description after 120 letters
                        }
                    
                    
                        u++;
                    }
                    else
                    {   
                        /*test de l'ingredients existe déjà */
                        let result = false;
                        for(let d = 0;d < this.ListIngredients.children.length;d++)
                        {
                            if(this.ListIngredients.children[d].innerHTML.toLowerCase().trim() == ingredientDiv.innerHTML.toLowerCase().trim())
                            {
                                result = true;
                            }
                        }

                        if(!result)
                        {
                            this.ListIngredients.append(ingredientDiv)
                            u++;
                            if(!havebeenadded)
                            {   
                                // insert in DOM allCardRecipes
                                this.wrapper.insertAdjacentHTML('beforeEnd', card)
                                havebeenadded = true;
                                // cut the long description after 120 letters
                            }
                        
                        }
                    }

        }}})
        


            if(recipe.appliance.includes(searchTerm) | searchTerm == false)
            {
                if(g != max)
                {
                    const applianceDiv = document.createElement('div')
                    applianceDiv.setAttribute('value',recipe.id)
                    applianceDiv.setAttribute('class','filter-list__item')
                    applianceDiv.setAttribute('tabindex','0')
                    applianceDiv.setAttribute('role','button')
    
                   
                    if(recipe.appliance.includes('('))
                    {
                        applianceDiv.innerHTML = recipe.appliance.split('(')[0].trim()
                    }
                    else
                    {
                        applianceDiv.innerHTML = recipe.appliance.trim()
                    }

                    if(this.ListAppareils.children.length == 0)
                    {
                        this.ListAppareils.append(applianceDiv)

                        if(!havebeenadded)
                        {   
                            // insert in DOM allCardRecipes
                            this.wrapper.insertAdjacentHTML('beforeEnd', card)
                            havebeenadded = true;
                            // cut the long description after 120 letters
                        }
                    
                    
                        g++;
                    }
                    else
                    {   
                        let result = false;
                        for(let d = 0;d < this.ListAppareils.children.length;d++)
                        {
                            if(this.ListAppareils.children[d].innerHTML.toLowerCase().trim() == applianceDiv.innerHTML.toLowerCase().trim())
                            {
                                result = true;
                            }
                        }

                        if(!result)
                        {
                            this.ListAppareils.append(applianceDiv)
                            g++;

                            if(!havebeenadded)
                            {   
                                // insert in DOM allCardRecipes
                                this.wrapper.insertAdjacentHTML('beforeEnd', card)
                                havebeenadded = true;
                                // cut the long description after 120 letters
                            }
                        
                        }
                    }
                }
            }

           
            recipe.ustensils.forEach((ustensil) => {
                if(ustensil.includes(searchTerm) | searchTerm == false)
                {
                    if(y != max)
                    {
                        let ustensilDiv = document.createElement('div')
                        ustensilDiv.setAttribute('value',recipe.id)
                        ustensilDiv.setAttribute('class','filter-list__item')
                        ustensilDiv.setAttribute('tabindex','0')
                        ustensilDiv.setAttribute('role','button')

                        ustensilDiv.innerHTML = ustensil
                     
                    if(this.ListUstensiles.children.length == 0)
                    {
                        this.ListUstensiles.append(ustensilDiv)

                        if(!havebeenadded)
                        {   
                            // insert in DOM allCardRecipes
                            this.wrapper.insertAdjacentHTML('beforeEnd', card)
                            havebeenadded = true;
                            // cut the long description after 120 letters
                        }
                    
                    
                        y++;
                    }
                    else
                    {   
                        if(ustensil.includes('('))
                        {
                            ustensilDiv.innerHTML = ustensil.split('(')[0].trim()
                        }
                        else
                        {
                            ustensilDiv.innerHTML = ustensil.trim()
                        }

                        let result = false;
                        for(let d = 0;d < this.ListUstensiles.children.length;d++)
                        {
                            if(this.ListUstensiles.children[d].innerHTML.toLowerCase().trim() == ustensil.toLowerCase().trim())
                            {
                                result = true;
                            }
                        }

                        if(!result)
                        {
                            this.ListUstensiles.append(ustensilDiv)
                            y++;
                            
                            if(!havebeenadded)
                            {   
                                // insert in DOM allCardRecipes
                                this.wrapper.insertAdjacentHTML('beforeEnd', card)
                                havebeenadded = true;
                                // cut the long description after 120 letters
                            }
                        }
                    }
                    }
                }
            })
        })

        Select.initSelectEvent()
    }



    async AllRecipes() {
        this.recipesData.forEach(recipe => {
          
        
                const card = `
                <article id="card" class="col-lg-3 col-md-6 m-4">
                
                <img class="card-img-top" src="./assets/images/img-recipes.jpg" alt="default image" role="image"/>
                
                <div class="row infoDescription p-3">
                
                <h5 class="col-md-8 title mb-3 d-flex align-items-center">${recipe.name}</h5>
                
                <div class="col-md-4 time mb-3 d-flex justify-content-end">
                    <b class="d-flex align-items-center justify-content-between"> 
                        <span><i class="far fa-clock"></i>  ${recipe.time} min</span>
                    </b>
                </div>
                
                <ul class="col-md-6 mb-3" id="ingredients-${recipe.id}">
                
                </ul>
                
                <p id="description" class="col-md-6">${recipe.description.substring(0,160)+ "..."}</p>
                
                </div>
                
                </article>`

                
                  // insert in DOM allCardRecipes
                  this.wrapper.insertAdjacentHTML('beforeEnd', card)
                  // cut the long description after 120 letters

                
                  recipe.ingredients.forEach((ingredient) => {
                    // console.log(ingredient)
                    
                    let listingredients = document.querySelector("#ingredients-" + recipe.id)
                    

                
                    let components = ingredient.ingredient
                    let quantity = ingredient.quantity
                    let unit = ingredient.unit
                    
                    if (quantity == undefined)
                    {
                        quantity = ""
                    }
                    
                    if (unit === undefined)
                    {
                        unit = ""
                    }
                    
                    const listeItem = `
                    <li><strong>${ components } :</strong> ${ quantity } ${ unit }</li>
                    `
                    
                    listingredients.insertAdjacentHTML('beforeEnd', listeItem)
                    })
              
            
        
            })
    }
    
}
