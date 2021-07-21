
// event scroll
document.addEventListener("scroll",displayBtnContenu);
//btn contenu 
function displayBtnContenu(){
    let btnContenu = document.querySelector(".boutonContenu");
    if(btnContenu){
        if(window.pageYOffset > 50) { // regarde le niveau où je suis ds la page
            btnContenu.style.visibility = 'visible';
        }else{
            btnContenu.style.visibility = 'hidden';
        }}
}
/* navigation au clavier*/
window.addEventListener("keydown", function(event) {
    if(!window.isModalOpened){
        if (event.keyCode === 13) { /* entrée pour clicker*/
            event.preventDefault(); /* empecher le comportement par défaut*/
            event.target.click();
            event.target.firstChild.click();    
        }
        if (event.keyCode === 8) { // retour arrière - action précédent
            window.history.back();
        }}
    
}, true);


