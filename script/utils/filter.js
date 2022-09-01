

 import recipes from '../../data/recipes.js';

export default class filterSelect {
    constructor() {
        this.recipesData = recipes
        this.wrapper = document.getElementById('cardRecipes')
        this.ListIngredients = document.getElementById('filter-list-ingredients')
        this.ListAppareils = document.getElementById('filter-list-appareils')
        this.ListUstensiles = document.getElementById('filter-list-ustensiles')
        this.InputIngredients = document.getElementById('searchIngredients')
        this.InputAppareils = document.getElementById('searchAppareils')
        this.InputUstensiles = document.getElementById('searchUstensiles')

        this.searchBar =document.querySelector('#searchBar')
    
     
        this.Allkey = document.querySelectorAll('.Keysaved')

        this.filterIngredient = document.querySelector('#filter-list-ingredients')
  
        this.filterAppareils = document.querySelector('#filter-list-appareils')
        this.filterUstensiles = document.querySelector('#filter-list-ustensiles')

        this.filterList = document.querySelector('.filter-list')

        this.filterBtnIngredient = document.querySelector('#filter-ingredients');
        this.filterBtnAppareils = document.querySelector('#filter-appareils');
        this.filterBtnUstensiles = document.querySelector('#filter-ustensiles');
        

        this.searchBar = document.querySelector('#searchBar')
        this.searchBarInput =  searchBar.querySelector('input')
        this. searchBarBtn = searchBar.querySelector('#searchBar .fa-search')

    }

    openSelectFilterIngredient(e) {

        if(this.filterIngredient.children.length > 0)
        {
            this.filterUstensiles.classList.remove("open");
            this.filterAppareils.classList.remove("open");
            this.filterIngredient.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
       
    }

    openSelectFilterAppareils(e){
        if(this.filterAppareils.children.length > 0)
        {
            this.filterIngredient.classList.remove("open");
            this.filterUstensiles.classList.remove("open");
            this.filterAppareils.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
    }

    openSelectFilterUstensiles(e) {
        if(this.filterUstensiles.children.length > 0)
        {
            this.filterIngredient.classList.remove("open");
            this.filterAppareils.classList.remove("open");
            this.filterUstensiles.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
    }

    
    closeSelectFilter() {

        this.filterIngredient.classList.remove("open");
        this.filterAppareils.classList.remove("open");
        this.filterAppareils.classList.remove("open");
    }
      
    CreateKey(value,type){
        let Allkey = document.querySelectorAll('.Keysaved')

        /* Verify not in double */

        let double = false;

        Allkey.forEach(el => {
            if(el.innerHTML.split('<span')[0].trim() == value.trim())
            {
                double = true;
            }
        })

        if(double)
        {
            return;
        }

        let keySection = document.querySelector('.KeyWordsSection')

        var color;

        switch(type)
        {
            case 'Ingredients':
                color = '#3282F7';
                break;
            case 'Appareils':
                color = '#68D9A4';
                break;
            case 'Ustensiles':
                color = '#ED6454';
                break;
        }

        let div = document.createElement('div')
        let span = document.createElement('span')
        div.classList.add('Keysaved')
        div.setAttribute('style','background-color:'+color+';color:white;')

        div.innerHTML = value;
        span.setAttribute('class','fa-solid fa-xmark x-mark')

        div.append(span)

        keySection.append(div)
     

        span.addEventListener('click',() => {
            div.remove();
            this.TokenSearch();
           
        });

        this.TokenSearch()
        
    }

 
    TokenSearch(){

        this.wrapper.innerHTML = '';
        let Alltoken = document.querySelectorAll('.Keysaved')

        let tokenIngredient = [];
        let tokenUstensiles = [];
        let tokenAppareil = [];

        //add on list all token
        Alltoken.forEach(token => {
            if(token.style.backgroundColor == "rgb(50, 130, 247)")
            {
                tokenIngredient.push(token.innerHTML.split('<')[0])
            }
            if(token.style.backgroundColor == "rgb(104, 217, 164)" )
            {
                tokenAppareil.push(token.innerHTML.split('<')[0])
            }
            if(token.style.backgroundColor == "rgb(237, 100, 84)" )
            {
                tokenUstensiles.push(token.innerHTML.split('<')[0])
            }
        })
        
        //Searching for a recipe that correspond of all token
        this.recipesData.forEach(recipe => {

            let result = false

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

            let listofresult = []
            let Max = tokenIngredient.length
          
            if(tokenIngredient.length > 0)
            {
                tokenIngredient.forEach(ingredientfromlist => {
                    recipe.ingredients.forEach((ingredient) => {
                    
                        if(ingredient.ingredient.includes(ingredientfromlist))
                        {
                            listofresult.push(true)
                        } 
                    })
                })
                
                
                if(listofresult.length == Max)
                {
                    result = true
                }

                if(listofresult.length != Max)
                {
                    result = false
                }
            }

            if(tokenIngredient.length == 0)
            {
                result = true
            }

            listofresult = []
            Max = tokenAppareil.length

            if(tokenAppareil.length > 0)
            {
             
                tokenAppareil.forEach(fromlist => {
                        if(recipe.appliance.includes(fromlist))
                        {
                            listofresult.push(true)
                        } 
                })
                
                  
                if(listofresult.length == Max && !result)
                {
                    result = true
                }

                if(listofresult.length != Max)
                {
                    result = false
                }
            }

            if(tokenIngredient.length == 1 && tokenAppareil.length == 1)
            {
                result = true
            }

            listofresult = []
            Max = tokenAppareil.length
          
            if(tokenUstensiles.length > 0)
            {
              
                tokenUstensiles.forEach(fromlist => {
                    recipe.ustensils.forEach((ustensil) => {
                    
                        if(ustensil.includes(fromlist))
                        {
                            listofresult.push(true)
                        } 
                    })
                })

                if(listofresult.length == Max && !result)
                {
                    result = true
                }
           
                if(listofresult.length-1 != Max)
                {
                    result = false
                }
            }
            
             // insert in DOM allCardRecipes
            if(result)
            this.wrapper.insertAdjacentHTML('beforeEnd', card)
        
        })
    }
    
    

    initFilter(){
        document.querySelector('html').addEventListener('click',()=> {this.closeSelectFilter()});
        this.filterIngredient.addEventListener('click',(e)=> {e.stopPropagation()});
        this.filterAppareils.addEventListener('click',(e)=> {e.stopPropagation()});
        this.filterAppareils.addEventListener('click',(e)=> {e.stopPropagation()});
        this.filterBtnIngredient.addEventListener("click",(e) => this.openSelectFilterIngredient(e));
        this.filterBtnAppareils.addEventListener("click",(e) =>  this.openSelectFilterAppareils(e));
        this.filterBtnUstensiles.addEventListener("click",(e) =>  this.openSelectFilterUstensiles(e));
    }

    initSelectEvent(type = false){
         // Ouverture du select
      
       if(type == false | type == 'Ingredients')
       {
            for(let i = 0 ; i < this.filterIngredient.children.length ;i++)
            {
                if(!this.filterIngredient.children[i].classList.contains('inputGroup'))
                {
                    let value = this.filterIngredient.children[i].innerHTML
                    this.filterIngredient.children[i].addEventListener("click",() => { this.CreateKey(value,'Ingredients') });
                }
                
            }
       }
     

       if(type == false | type == 'Appareils')
       {
            for(let u = 0 ; u < this.filterAppareils.children.length ;u++)
            {
                if(!this.filterAppareils.children[u].classList.contains('inputGroup'))
                {
                    let value = this.filterAppareils.children[u].innerHTML 
                    this.filterAppareils.children[u].addEventListener("click",() => { this.CreateKey(value,'Appareils') });   
                }
            }
       }

       if(type == false | type == 'Ustensiles')
       {
            for(let i = 0 ; i < this.filterUstensiles.children.length ;i++)
            {
                if(!this.filterUstensiles.children[i].classList.contains('inputGroup'))
                {
                    this.filterUstensiles.children[i].addEventListener("click",() => { this.CreateKey(this.filterUstensiles.children[i].innerHTML,'Ustensiles') });   
                }
            }
       }
    }

}


