
/*------------------------------------------------------------------------*/
/*----------Test systematique au chargement------------*/
/*------------------------------------------------------------------------*/
//affiche au chargement de la page chargeModalFin si le formulaire a ete rempli precedemment
if (sessionStorage.getItem("formulaireTermine")) {
    // chargeModalFin();
  }
  
  
  /*------------------------------------------------------------------------*/
  /*----------Variables globales (existent partout dans le code)------------*/
  /*------------------------------------------------------------------------*/
  
  //couleur de l'erreur
  const colorErreur = "yellow";
  
  /*----------Variables globales - noeuds Html recuperés & ajout d'un ecouteur d'evenements sur le noeudHTml------------*/
 
  var contactMe = document.querySelector(".btn-contact");
  contactMe.addEventListener("click", chargeForm);
 
  //Activer le btn c'est parti
  var btnValid = document.querySelector(".btn-valide");
  btnValid.addEventListener("click", formValid);
   
  

  //l'ensemble du formulaire (la page du formulaire)
  const formulaire = document.querySelector("#formulaire");
  
  
  
  // création de la constante spanClose pour fermer la modale (Todo 1)
  const closes = document.querySelectorAll(".close");
  closes.forEach((spanClose) =>
    close.addEventListener("click", closeForm)
  );
  
  
  // declenche les fonctions tests sur l'evenement "change" posé sur le noeudHtml qui a l'ID
  const inputPrenom = document.querySelector("#prenom");
  inputPrenom.addEventListener("change", testPrenom);
  
  const inputNom = document.querySelector("#nom");
  inputNom.addEventListener("change", testNom);
  
  const inputMail = document.querySelector("#email");
  inputMail.addEventListener("change", testMail);
  
  
  /*------------------------------------------------------------------------*/
  /*----------------------------Traitement au chargement--------------------*/
  /*------------------------------------------------------------------------*/
  
  /*----------supprime les bulles d'erreur html5-----------------*/
 //prevent default retire l'affichage de l'infobulle d'erreur
  const data = document.querySelectorAll(".data");
  data.forEach((form) => {
    form.addEventListener(
      "invalid",
      function (e) {
        e.preventDefault(); 
      },
      true
    );
  });
  
  // Ajoute l'evenement au moment ou la touche se releve  qui declenche la fermeture du formulaire avec echap et validation avec entrée
  document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      closeForm();
      
    }
    if (e.keyCode == 13) {
      formValid();
      
    }
  });
  
  
  /*------------------------------------------------------------------------*/
  /*----------------------------Fonctions - gestion tests-------------------*/
  /*------------------------------------------------------------------------*/
  //function test nom - prenom
  function testTexte(textID, erreurId){
    const elementHtml = document.querySelector(textID);
    var value = elementHtml.value;
  
    var resultatTest = false;
  
    if (value == "" || value.length <= 2) {
      elementHtml.style.border = colorErreur + " 2px solid";
  
      afficheErreur(erreurId);
    } else {
      resultatTest = true;
      elementHtml.style.border = colorErreur + " 0px solid";
      supprimeErreur(erreurId);
    }
    return resultatTest;
  }
  // fonction de test validité de du prenom & affichage de l'erreur si necessaire
  function testPrenom() {
     return testTexte("#prenom","#erreurPrenom");
  }
  
  // fonction de test validité du nom & affichage de l'erreur si necessaire
  function testNom() {
      return testTexte("#nom","#erreurNom");
  }
  
  // fonction de test validité du mail & affichage de l'erreur si necessaire
  function testMail() {
    const elementHtml = document.querySelector("#email");
    var value = elementHtml.value;
  
    var resultatTest = false;
  
  
    if (checkEmail(value) == false) {
      elementHtml.style.border = colorErreur + " 2px solid";
      afficheErreur("#erreurEmail");
    } else {
      resultatTest = true;
      elementHtml.style.border = colorErreur + " 0px solid";
      supprimeErreur("#erreurEmail");
    }
    return resultatTest;
  }
  // fonction de test validité de l'email (regex = expression reguliere)
  function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
 
  
 
   
  /*------------------------------------------------------------------------*/
  /*------------------Fonctions - Validation du formulaire------------------*/
  /*------------------------------------------------------------------------*/
  function formValid() { 
    // Enregistrement donneesSauvees dans la session storage
    sessionStorage.setItem("donneesSauvees", true);
  
    let formulaireValid = true;
  
    /*-----------------Déclaration de la variable saisiePrénom------------------*/
    var saisiePrenom = document.getElementById("prenom").value;
  
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisiePrenom", saisiePrenom);
  
    // appel de la function testPrenom
    if (testPrenom() === false) {
      formulaireValid = false;
    }
  
    /*---------------Déclaration de la variable saisieNom------------------------ */
    var saisieNom = document.getElementById("nom").value;
  
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieNom", saisieNom);
  
    // appel de la function testNom
    if (testNom() === false) {
      formulaireValid = false;
    }
  
    /*-----------------validation de l'adresse e-mail-------------------------------*/
    var saisieEmail = document.getElementById("email").value;
    // permet d'enregistrer les éléments ecrits par l'utilisateur
    sessionStorage.setItem("saisieEmail", saisieEmail);
    // appel de la function testMail
    if (testMail() === false) {
      formulaireValid = false;
    }
  
    
    // si pas d'erreur enregistre
    if (formulaireValid === true) {
      sessionStorage.setItem("formulaireTermine", true);
      chargeModalFin()
    }
    
  }
  
  /*------------------------------------------------------------------------*/
  /*---------Fonctions - gestion ouverture & fermeture des modals-----------*/
  /*------------------------------------------------------------------------*/
  // Ferme le formulaire
  function closeForm() {
    formulaire.style.display = "none";
  }
  //Affiche le formulaire & recupere les informations a mettre dans le formulaire
  function chargeForm() {
      formulaire.style.display = "block";
  
    /*---------------------donneesSauvees storage-----------------------------------------*/
  
    // si donneesSauvees est recuperé dans session storage
    if (sessionStorage.getItem("donneesSauvees")) {
      //remplir le champs prénom avec la valeur de "saisiePrenom" enregistrée dans sessionStorage
      document.querySelector("#prenom").value = sessionStorage.getItem(
        "saisiePrenom"
      );
      //remplir le champs nom avec la valeur de "saisieNom" enregistrée dans sessionStorage
      document.querySelector("#nom").value = sessionStorage.getItem("saisieNom");
      //remplir le champs email avec la valeur de "email" enregistrée dans sessionStorage
      document.querySelector("#email").value = sessionStorage.getItem(
        "saisieEmail"
      );
//remplir le champs message avec la valeur de "message" enregistrée dans sessionStorage
      document.querySelector("#message").value = sessionStorage.getItem(
        "saisieMessage"
      );
      //appels des fonctions tests pour tester la validité et affiche le message d'erreur si invalide
      testPrenom();
      testNom();
      testMail();
      
    }
  }
  
  function chargeModalFin() { 
    //recupere les informations dans le sessionstorage & envoie le mail des infos saisies
    let fullName = sessionStorage.getItem("saisiePrenom");
    let userEmail = sessionStorage.getItem("saisieEmail");
  
    let userMessage =
      "chargeModalFin:" +
      sessionStorage.getItem("saisieNom") +
      "/" +
      sessionStorage.getItem("saisieMessage");
  
    var contactParams = {
      from_name: fullName,
      reply_to: userEmail,
      message: userMessage,
    };
  
    emailjs.init("user_7tR9LJzR8U8F0vQka347x");
  
    //  emailjs.send("service_ahy6xbq", "template_ylvldvg", contactParams)
    //supprime la session storage
    sessionStorage.clear();
    //affiche la modal de fin
    const modalFin = document.querySelector("#modalFin");
    modalFin.style.display = "flex";
  }
  
  // Fermle la modal de fin
  function closeModalFin() {
    const modalFin = document.querySelector("#modalFin");
    modalFin.style.display = "none";
  }
  
  /*------------------------------------------------------------------------*/
  /*----------------------------Fonctions - autres--------------------------*/
  /*------------------------------------------------------------------------*/
  
  //fait disparaitre les erreurs
  function supprimeErreur(erreurId) {
    const elementErreur = document.querySelector(erreurId);
    elementErreur.style.visibility = "hidden";
  }
  
  function afficheErreur(erreurId) {
    const elementErreur = document.querySelector(erreurId);
    elementErreur.style.visibility = "visible";
  }
  
