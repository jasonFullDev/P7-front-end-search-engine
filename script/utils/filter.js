

 
function SelectFactory(){
    const filterIngredient = document.querySelector('#filter-list-ingredients');
    const filterAppareils = document.querySelector('#filter-list-appareils');
    const filterUstensiles = document.querySelector('#filter-list-ustensiles');

    const filterBtnIngredient = document.querySelector('#filter-ingredients');
    const filterBtnAppareils = document.querySelector('#filter-appareils');
    const filterBtnUstensiles = document.querySelector('#filter-ustensiles');
    
 
    

    function openSelectFilterIngredient() {
        filterIngredient.classList.toggle("open");
    }

    function openSelectFilterAppareils(){
        filterAppareils.classList.toggle("open");
    }

    function openSelectFilterUstensiles() {
        filterUstensiles.classList.toggle("open");
    }


    function initSelectEvent(){
         // Ouverture du select
       filterBtnIngredient.addEventListener("click",openSelectFilterIngredient);
       filterBtnAppareils.addEventListener("click",openSelectFilterAppareils);
       filterBtnUstensiles.addEventListener("click",openSelectFilterUstensiles);

        /* Fermeture du bouton de trie*/
        filterIngredient.addEventListener("click", () => {
            filterIngredient.classList.remove("open");
        });  
        filterAppareils.addEventListener("click", () => {
            filterAppareils.classList.remove("open");
        });  
        filterUstensiles.addEventListener("click", () => {
            filterUstensiles.classList.remove("open");
        });  


    }
    return {initSelectEvent}
}

export default SelectFactory 



