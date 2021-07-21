import{sendEmail}from './fe-js-emailJs.js';
/*---------------------------------chargement de l'event modal--------------------------*/
//page du formulaire
const formCharge= document.querySelector("#formulaire");
//btn close
const close= document.querySelectorAll(".close");
close.forEach((btn) => btn.addEventListener("click", closeModal));

export function loadModalEvent(){
    //affiche le nom dans la modal
    const nomPhotographeForm = document.querySelector("#nomPhotographeForm");
    const nomDuPhotographeLarge = document.querySelector(".nomDuPhotographeLarge");
    nomPhotographeForm.innerHTML = nomDuPhotographeLarge.innerHTML;
    //event sur le btn contactez moi
    const btnContact= document.querySelector("#btn-contact");
    btnContact.addEventListener("click", chargeForm);
    return 0;
}
function chargeForm(event){
    //affiche la modal en stoppant le refresh
    event.preventDefault();
    formCharge.style.visibility="visible";
    //fais disparaitre le btn contactez moi
    const btnContact= document.querySelector("#btn-contact");
    btnContact.style.visibility="hidden";
    return 0;
}
function closeModal(){
    formCharge.style.visibility="hidden";  
    //supprime les errors au close
    supprimeError("#errorSurname");
    supprimeError("#errorName");
    supprimeError("#errorEmail");
    const btnContact= document.querySelector("#btn-contact");
    btnContact.style.visibility="visible";
    return 0;
}
/*---------------------------------envoie du formulaire-------------------------------*/
const envoiForm=document.querySelector(".btn-valide");
envoiForm.addEventListener("click", submitValid );

const modalEndMessage = document.querySelector(".modalFin");

/*-------------------------------supprime les bulles d'error html5--------------------*/
//Récupere tous les elements de classe .data du formulaire 
const formData = document.querySelectorAll(".data");
formData.forEach((form) => {
    form.addEventListener(
        "invalid",
        function (e) {
            e.preventDefault(); //prevent default retire l'affichage de l'infobulle d'erreur
        },
        true
    );
});

/*-----------------------------------keyCode- navigation clavier pour modal--------------*/
document.addEventListener("keyup", function (e) {       
    if (e.keyCode === 27) {
        closeModal();
        closeModalFin();
    }
    if (e.keyCode === 13) {
        submitValid();    
        closeModalFin();
    } 
});
/*---------------------------------Event sur l'evenement "change"---------------------*/

const inputSurname = document.querySelector("#surname");
inputSurname.addEventListener("change", testSurname);

const inputName = document.querySelector("#name");
inputName.addEventListener("change", testName);

const inputMail = document.querySelector("#email");
inputMail.addEventListener("change", testMail);


/*---------------------------------chargement de l'event modal de Fin-----------------*/
const closeFormFin2=document.querySelectorAll(".closeModalFin");
closeFormFin2.forEach((btn) => btn.addEventListener("click", closeModalFin ));

function closeModalFin(){
    modalEndMessage.style.visibility="hidden";
    const btnContact= document.querySelector("#btn-contact");
    btnContact.style.visibility="visible";
    return 0;
}

/*----------------------------Fonctions - gestion tests------------------------------*/
//color error
var colorError = "#901c1c";
//function test
function testInput(textID, errorId){
    const elementHtml = document.querySelector(textID);
    var value = elementHtml.value;
  
    var resultatTest = false;
  
    if (value === "" || value.length <= 2) {
        elementHtml.style.background = colorError ;
  
        afficheError(errorId);
    } else {
        resultatTest = true;
        elementHtml.style.border = colorError + " 0px solid";
        supprimeError(errorId);
    }
    return resultatTest;
}
// fonction de test validité de du Surname & affichage de l'erreur si necessaire
function testSurname() {
    return testInput("#surname","#errorSurname");
}
// fonction de test validité du Name & affichage de l'erreur si necessaire
function testName() {
    return testInput("#name","#errorName");
}
// fonction de test validité du mail & affichage de l'erreur si necessaire
function testMail() {
    const elementHtml = document.querySelector("#email");
    var value = elementHtml.value;
  
    var resultatTest = false;
  
    if (checkEmail(value) === false) {
        elementHtml.style.background = colorError;
        afficheError("#errorEmail");
    } else {
        resultatTest = true;
        elementHtml.style.background = colorError;
        supprimeError("#errorEmail");
    }
    return resultatTest;
}
// fonction de test validité de l'email (regex = expression reguliere)
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/*----------------------------------------------affiche et supprime error -------------------*/
function afficheError(errorId) {
    const elementError = document.querySelector(errorId);
    elementError.style.visibility = "visible";
    return 0;
}
function supprimeError(errorId) {
    const elementError = document.querySelector(errorId);
    elementError.style.visibility = "hidden";
    return 0;
}

/*-----------------------------------------Validation du formulaire-----------------------*/
function submitValid() {
   
    let formValid = true;
    // appel de la function testSurname
    if (testSurname() === false) {
        formValid = false;
    }
    // appel de la function testName
    if (testName() === false) {
        formValid = false;
    }
    // appel de la function testMail
    if (testMail() === false) {
        formValid = false;
    }
    //si pas d'erreur enregistre
    if (formValid === true) {
        launchModalFin();
    }
    return 0; 
}
  
/*-------------------------------chargement des infos et envoi par email ---------*/
function launchModalFin() {
    //recupere les informations dans le sessionstorage & envoie le mail des infos saisies
    let fullName = document.querySelector("#surname").value;
    let userEmail = document.querySelector("#email").value;
    let userMessage =
      "launchModalFin:" +
      document.querySelector("#name").value +
      "/" +
      document.querySelector("#surname").value +
      "/"+
      document.querySelector("#message").value +
      "/"
      ;
    /* appel de fonction fonctionnement emailjs*/ 
    sendEmail(fullName, userEmail, userMessage);
    
    //affiche la modal de fin
    modalEndMessage.style.visibility="visible";
    // mise a zero des imput apres envoie du mail de contact
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
    closeModal();
    
    const btnContact= document.querySelector("#btn-contact");
    btnContact.style.visibility="hidden";
    return 0;
}
  
