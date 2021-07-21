
document.addEventListener("scroll",displayBtnContenu);
//btn navigation
function displayBtnContenu(){
    let btnContenu = document.querySelector(".boutonContenu");
    if(btnContenu){
        if(window.pageYOffset > 50) {
            btnContenu.style.visibility = 'visible';
        }else{
            btnContenu.style.visibility = 'hidden';
        }}
}
/* navigation au clavier*/
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) { /* espace pour clicker*/
        event.preventDefault(); /* empecher le comportement par défaut*/
        event.target.click();
        event.target.firstChild.click();    
    }
    if (event.keyCode === 8) {
        window.history.back();
    }
    
}, true);


