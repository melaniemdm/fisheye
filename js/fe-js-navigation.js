
document.addEventListener("scroll",displayBtnContenu);
//btn navigation
function displayBtnContenu(){
    let btnContenu = document.querySelector(".boutonContenu");
    if(window.pageYOffset > 50) {
        btnContenu.style.visibility = 'visible';
    }else{
        btnContenu.style.visibility = 'hidden';
    }
}


