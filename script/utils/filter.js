

 
function SelectFactory(){
    const filterIngredient = document.querySelector('#filter-list-ingredients');
    const filterAppareils = document.querySelector('#filter-list-appareils');
    const filterUstensiles = document.querySelector('#filter-list-ustensiles');

    const filterBtnIngredient = document.querySelector('#filter-ingredients');
    const filterBtnAppareils = document.querySelector('#filter-appareils');
    const filterBtnUstensiles = document.querySelector('#filter-ustensiles');
    

    const searchBar = document.querySelector('#searchBar')
    const searchBarInput =  searchBar.querySelector('input')
    const  searchBarBtn = searchBar.querySelector('#searchBar .fa-search')


    function openSelectFilterIngredient() {

        if(filterIngredient.children.length > 0)
        {
            filterAppareils.classList.remove("open");
            filterUstensiles.classList.remove("open");
            filterIngredient.classList.toggle("open");
        }
       
    }

    function openSelectFilterAppareils(){
        if(filterAppareils.children.length > 0)
        {
            filterIngredient.classList.remove("open");
            filterUstensiles.classList.remove("open");
            filterAppareils.classList.toggle("open");
        }
    }

    function openSelectFilterUstensiles() {
        if(filterUstensiles.children.length > 0)
        {
            filterIngredient.classList.remove("open");
            filterAppareils.classList.remove("open");
            filterUstensiles.classList.toggle("open");
        }
    }

    
    function closeSelectFilter() {
        filterIngredient.classList.remove("open");
        filterAppareils.classList.remove("open");
        filterUstensiles.classList.remove("open");
    }


    function filterevent(element,e){
        searchBarInput.value = element.innerHTML; 
        searchBarBtn.click(); 
        element.parentElement.classList.remove("open"); 
        e.preventDefault()
        e.stopPropagation()
    }

    function initFilter(){
        filterBtnIngredient.addEventListener("click",openSelectFilterIngredient);
        filterBtnAppareils.addEventListener("click",openSelectFilterAppareils);
        filterBtnUstensiles.addEventListener("click",openSelectFilterUstensiles);
    }

    function initSelectEvent(){
         // Ouverture du select
      
       for(let i = 0 ; i < filterIngredient.children.length ;i++)
       {
        filterIngredient.children[i].addEventListener("click",() => { filterevent(filterIngredient.children[i],event) });
       }
       
       for(let i = 0 ; i < filterAppareils.children.length ;i++)
       {
        filterAppareils.children[i].addEventListener("click",() => { filterevent(filterAppareils.children[i]) });
       }

       for(let i = 0 ; i < filterUstensiles.children.length ;i++)
       {
        filterUstensiles.children[i].addEventListener("click",() => { filterevent(filterUstensiles.children[i]) });
       }



    }
    return {initSelectEvent , initFilter}
}

export default SelectFactory 



