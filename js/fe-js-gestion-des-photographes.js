import { ArtistesFactory } from './fe-js-classe-Artistes-Factory.mjs'

// fonction qui recupere le json
async function getPhotographersFromJson() {
  let url = "http://127.0.0.1:5501/json/FishEyeData.json";
  let rep = await fetch(url, { method: "GET" });
  let reponse = await rep.json();
  let arrayPhotographers = reponse["photographers"];

return arrayPhotographers}

//Affiche tous les photographes
export async function displayAllPhotographers (){
  var arrayPhotographersFromJson = await getPhotographersFromJson()
  for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
var nodePhotographersList = document.querySelector("#listeDesPhotographes")
var objetPhotographe = await getPhotographerObjectFromFactory(arrayPhotographersFromJson[i])
nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposant()
  }
}

//fonction affiche UN photographe dans la page Media
export async function displayOnePhotographer (id){
  var arrayPhotographersFromJson = await getPhotographersFromJson()
  for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
    if (arrayPhotographersFromJson[i].id == id){
var nodePhotographersList = document.querySelector("#lePhotographe")
//demande a recuperer l'object grace a la factory avec les infos recuperé dans le json
var objetPhotographe = await getPhotographerObjectFromFactory(arrayPhotographersFromJson[i])
nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposantLarge()
  } 
 }
 
//function qui met un event sur btn contact
loadModalEvent()
return 0
}


//fonction affiche les photographes en fonction du tag
export async function displayAllPhotographersTagues (tag){
  
  var arrayPhotographersFromJson = await getPhotographersFromJson()
  var nodePhotographersList = document.querySelector("#listeDesPhotographes")
nodePhotographersList.innerHTML = "" // pour vider et recréer
  for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
   
    //verifie si le tableau contient une sous chaine de caractere, renvoie true s'il existe
    if (arrayPhotographersFromJson[i].tags.includes(tag) == true){
var objetPhotographe = await getPhotographerObjectFromFactory(arrayPhotographersFromJson[i])
nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposant()
  }
}}

//fonction recupere les elements
async function getPhotographerObjectFromFactory(photographe){
  var lesPhotographes = new ArtistesFactory();
  return lesPhotographes.creatArtistes("photographe", "photos/sample%20Photos/Photographers%20ID%20Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€/jour", photographe.tags)}

