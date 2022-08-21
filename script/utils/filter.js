

 
function SelectFactory(){
    const filterIngredient = document.querySelector('#filter-list-ingredients');
    const filterAppareils = document.querySelector('#filter-list-appareils');
    const filterUstensiles = document.querySelector('#filter-list-ustensiles');

    const filterList = document.querySelector('.filter-list')

    const filterBtnIngredient = document.querySelector('#filter-ingredients');
    const filterBtnAppareils = document.querySelector('#filter-appareils');
    const filterBtnUstensiles = document.querySelector('#filter-ustensiles');
    

    const searchBar = document.querySelector('#searchBar')
    const searchBarInput =  searchBar.querySelector('input')
    const  searchBarBtn = searchBar.querySelector('#searchBar .fa-search')


    function openSelectFilterIngredient(e) {

        if(filterIngredient.children.length > 0)
        {
            filterAppareils.classList.remove("open");
            filterUstensiles.classList.remove("open");
            filterIngredient.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
       
    }

    function openSelectFilterAppareils(e){
        if(filterAppareils.children.length > 0)
        {
            filterIngredient.classList.remove("open");
            filterUstensiles.classList.remove("open");
            filterAppareils.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
    }

    function openSelectFilterUstensiles(e) {
        if(filterUstensiles.children.length > 0)
        {
            filterIngredient.classList.remove("open");
            filterAppareils.classList.remove("open");
            filterUstensiles.classList.toggle("open");
            e.stopPropagation();// Don't bubble/capture the event any further
        }
    }

    
    function closeSelectFilter() {

        filterIngredient.classList.remove("open");
        filterAppareils.classList.remove("open");
        filterUstensiles.classList.remove("open");
    }
      
    function CreateKey(value,type){
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
        });
    }

 

    
    

    function initFilter(){
        document.querySelector('html').addEventListener('click',()=> {closeSelectFilter()});
        filterIngredient.addEventListener('click',(e)=> {e.stopPropagation()});
        filterAppareils.addEventListener('click',(e)=> {e.stopPropagation()});
        filterUstensiles.addEventListener('click',(e)=> {e.stopPropagation()});
        filterBtnIngredient.addEventListener("click",(e) => openSelectFilterIngredient(e));
        filterBtnAppareils.addEventListener("click",(e) =>  openSelectFilterAppareils(e));
        filterBtnUstensiles.addEventListener("click",(e) =>  openSelectFilterUstensiles(e));
    }

    function initSelectEvent(type = false){
         // Ouverture du select
      
       if(type == false | type == 'Ingredients')
       {
            for(let i = 0 ; i < filterIngredient.children.length ;i++)
            {
                if(!filterIngredient.children[i].classList.contains('inputGroup'))
                {
                    let value = filterIngredient.children[i].innerHTML
                    filterIngredient.children[i].addEventListener("click",() => { CreateKey(value,'Ingredients') });
                }
                
            }
       }
     

       if(type == false | type == 'Appareils')
       {
            for(let u = 0 ; u < filterAppareils.children.length ;u++)
            {
                if(!filterAppareils.children[u].classList.contains('inputGroup'))
                {
                    let value = filterAppareils.children[u].innerHTML 
                    filterAppareils.children[u].addEventListener("click",() => { CreateKey(value,'Appareils') });   
                }
            }
       }

       if(type == false | type == 'Ustensiles')
       {
            for(let i = 0 ; i < filterUstensiles.children.length ;i++)
            {
                if(!filterUstensiles.children[i].classList.contains('inputGroup'))
                {
                    filterUstensiles.children[i].addEventListener("click",() => { CreateKey(filterUstensiles.children[i].innerHTML,'Ustensiles') });   
                }
            }
       }
    }
    return {initSelectEvent , initFilter}
}


export default SelectFactory 



