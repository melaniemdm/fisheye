

// fonction qui recupere le json
async function recupereJsonPhotographes() {
  let url = "http://127.0.0.1:5501/json/FishEyeData.json";
  let rep = await fetch(url, { method: "GET" });
  let reponse = await rep.json();
  let tabloPhotographes = reponse["photographers"];

return tabloPhotographes}

//fonction affiche les photographes
async function afficheLesPhotographes (){
  var tabloPhotographesRecuperer = await recupereJsonPhotographes()
  for (i = 0; i < tabloPhotographesRecuperer .length; i++) { 
var noeudListePhotographes = document.querySelector("#listeDesPhotographes")
var objetPhotographe = await recupereElementPhotographe(tabloPhotographesRecuperer[i])
noeudListePhotographes.innerHTML = noeudListePhotographes.innerHTML + objetPhotographe.createComposant()
  }
}

//fonction affiche UN photographe dans la page Media
async function afficheLePhotographe (id){
  var tabloPhotographesRecuperer = await recupereJsonPhotographes()
  for (i = 0; i < tabloPhotographesRecuperer .length; i++) { 
    if (tabloPhotographesRecuperer[i].id == id){
var noeudListePhotographes = document.querySelector("#lePhotographe")
var objetPhotographe = await recupereElementPhotographe(tabloPhotographesRecuperer[i])
noeudListePhotographes.innerHTML = noeudListePhotographes.innerHTML + objetPhotographe.createComposantLarge()
  }
}
//function qui met un event sur btn contact
loadModalEvent()}

//fonction affiche les photographes en fonction du tag
async function afficheLesPhotographesTagues (tag){
  
  var tabloPhotographesRecuperer = await recupereJsonPhotographes()
  var noeudListePhotographes = document.querySelector("#listeDesPhotographes")
noeudListePhotographes.innerHTML = "" // pour vider et recréer
  for (i = 0; i < tabloPhotographesRecuperer .length; i++) { 
   
    //verifie si le tableau contient une sous chaine de caractere, renvoie true s'il existe
    if (tabloPhotographesRecuperer[i].tags.includes(tag) == true){
var objetPhotographe = await recupereElementPhotographe(tabloPhotographesRecuperer[i])
noeudListePhotographes.innerHTML = noeudListePhotographes.innerHTML + objetPhotographe.createComposant()
  }
}}

//fonction recupere les elements
async function recupereElementPhotographe(photographe){
  var lesPhotographes = new ArtistesFactory();
  return lesPhotographes.creatArtistes("photographe", "photos/sample%20Photos/Photographers%20ID%20Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€/jour", photographe.tags)}

