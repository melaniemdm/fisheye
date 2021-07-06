
//btn navigation
function displayBtnContenu(){
    let btnContenu = document.querySelector(".boutonContenu");
    if(window.pageYOffset > 50) {
        btnContenu.style.visibility = 'visible';
    }else{
        btnContenu.style.visibility = 'hidden';
    }
}
document.addEventListener("scroll",displayBtnContenu);

