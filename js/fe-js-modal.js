/*---------------------------------test systematique au load--------------------------*/
if (sessionStorage.getItem("formulaireTermine")) {
  launchModalFin(); 
}



/*---------------------------------chargement de l'event modal--------------------------*/
function loadModalEvent(){
const btnContact= document.querySelector("#btn-contact")
btnContact.addEventListener("click", chargeForm);
}
//page du formulaire
const formCharge= document.querySelector("#formulaire")

function chargeForm(event){
    //affiche la modal en stoppant le refresh
    event.preventDefault()
    formCharge.style.visibility="visible"
  }
//btn close
const close= document.querySelectorAll(".close")
close.forEach((btn) => btn.addEventListener("click", closeModal))

function closeModal(){
    formCharge.style.visibility="hidden"  
}
/*---------------------------------envoie du formulaire-------------------------------*/
const envoiForm=document.querySelector(".btn-valide")
envoiForm.addEventListener("click", submitValid )

const modalEndMessage = document.querySelector(".modalFin")

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

/*-----------------------------------keyCode------------------------------*/
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    closeModal();
    modalEndMessage();
  }
  if (e.keyCode == 13) {
    submitValid();
    modalEndMessage();
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
function launchModalFin(){
    modalEndMessage.style.visibility="visible"
    closeModal()  
}
function closeModalFin(){
    modalEndMessage.style.visibility="hidden"  
}
const closeFormFin=document.querySelectorAll(".btn-closeFin")
closeFormFin.forEach((btn) => btn.addEventListener("click", closeModalFin ))

/*----------------------------Fonctions - gestion tests------------------------------*/

//color error
var colorError = "#901c1c";
//function test
function testInput(textID, errorId){
    const elementHtml = document.querySelector(textID);
    var value = elementHtml.value;
  
    var resultatTest = false;
  
    if (value == "" || value.length <= 2) {
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
  
    if (checkEmail(value) == false) {
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
  }

  function supprimeError(errorId) {
    const elementError = document.querySelector(errorId);
    elementError.style.visibility = "hidden";
  }


  /*-----------------------------------------Validation du formulaire-----------------------*/
  function submitValid() {
    console.log("coucou")
    // Enregistrement donneesSauvees dans la session storage
    sessionStorage.setItem("donneesSauvees", true);
  
    let formValid = true;
  
    /*-----------------Déclaration de la variable saisieSurname------------------*/
    var saisieSurname = document.getElementById("surname").value;
  
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieSurname", saisieSurname);
  
    // appel de la function testSurname
    if (testSurname() === false) {
      formValid = false;
    }
  
/*-----------------Déclaration de la variable saisieMessage------------------*/
    var saisieMessage = document.getElementById("message").value;
  
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieMessage", saisieMessage);


    /*---------------Déclaration de la variable saisieName------------------------ */
    var saisieName = document.getElementById("name").value;
  
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieName", saisieName);
  
    // appel de la function testName
    if (testName() === false) {
      formValid = false;
    }
  
    /*-----------------validation de l'adresse e-mail-------------------------------*/
    var saisieEmail = document.getElementById("email").value;
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieEmail", saisieEmail);
    // appel de la function testMail
    if (testMail() === false) {
      formValid = false;
    }
   
  //si pas d'erreur enregistre
  if (formValid === true) {
  sessionStorage.setItem("formulaireTermine", true);
  launchModalFin()
}
  
    }
    
/*------Affiche le formulaire & recupere les informations a mettre dans le formulaire--------*/
function displayModal() {
    modalbg.style.display = "block";
  
    /*-------------------------------donneesSauvees storage----------------------------------*/
  
    // si donneesSauvees est recuperé dans session storage
    if (sessionStorage.getItem("donneesSauvees")) {
      //remplir le champs prénom avec la valeur de "saisiePrenom" enregistrée dans sessionStorage
      document.querySelector("#surname").value = sessionStorage.getItem(
        "saisieSurname"
      );
      //remplir le champs nom avec la valeur de "saisieNom" enregistrée dans sessionStorage
      document.querySelector("#name").value = sessionStorage.getItem("saisieName");
      //remplir le champs email avec la valeur de "email" enregistrée dans sessionStorage
      document.querySelector("#email").value = sessionStorage.getItem(  "saisieEmail"
      );
      //remplir le champs message avec la valeur de "saisieMessage" enregistrée dans sessionStorage
      document.querySelector("#message").value = sessionStorage.getItem("saisieMessage");

      //appels des fonctions tests pour tester la validité et affiche le message d'erreur si invalide
       testSurname();
       testName();
      testMail();
      
    }
  }
  /*-------------------------------chargement des infos et envoi par email ---------*/
  function launchModalFin() {
    //recupere les informations dans le sessionstorage & envoie le mail des infos saisies
    let fullName = sessionStorage.getItem("saisieSurname");
    let userEmail = sessionStorage.getItem("saisieEmail");
  
    let userMessage =
      "launchModalFin:" +
      sessionStorage.getItem("saisieName") +
      "/" +
      sessionStorage.getItem("saisieSurname") +
      "/"+
      sessionStorage.getItem("saisieMessage") +
      "/"
      ;
      
  
    var contactParams = {
      from_name: fullName,
      reply_to: userEmail,
      message: userMessage,
    };
  
    emailjs.init("user_7tR9LJzR8U8F0vQka347x");

  //permet d'envoyer le mail
      emailjs.send("service_ahy6xbq", "template_ylvldvg", contactParams)


    //supprime la session storage
    sessionStorage.clear();
    
    //affiche la modal de fin
    const modalFin = document.querySelector("#modalFin");
    modalFin.style.display = "flex";
  }
  
