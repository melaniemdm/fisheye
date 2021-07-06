import { Photographe } from './fe-js-classe-des-photographes.js';

// fonction qui recupere le json
async function getPhotographersFromJson() {
    let url = "https://melaniemdm.github.io/fisheye/json/FishEyeData.json";
    let rep = await fetch(url, { method: "GET" });
    let reponse = await rep.json();
    let arrayPhotographers = reponse["photographers"];

    return arrayPhotographers;}

//Affiche tous les photographes
export async function displayAllPhotographers (){
    var arrayPhotographersFromJson = await getPhotographersFromJson();
    console.log("etape1:", arrayPhotographersFromJson);
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
        var objetPhotographe = await getPhotographerObjectFromClass(arrayPhotographersFromJson[i],i);
        console.log("etape2:", objetPhotographe);
        var nodePhotographersList = document.querySelector("#listeDesPhotographes");
        nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposant();
        console.log("etape3:", objetPhotographe.createComposant());
    }
}

//fonction affiche UN photographe dans la page Media
export async function displayOnePhotographer (id){
    
    var arrayPhotographersFromJson = await getPhotographersFromJson();
   
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
        if (arrayPhotographersFromJson[i].id === parseInt(id)){
            var nodePhotographersList = document.querySelector("#lePhotographe");
            
            //demande a recuperer l'object grace a la factory avec les infos recuperé dans le json
            var objetPhotographe = await getPhotographerObjectFromClass(arrayPhotographersFromJson[i],i);
           
            nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposantLarge();
        } 
    }
 
    
    return 0;
}


//fonction affiche les photographes en fonction du tag
export async function displayAllPhotographersTagues (tag){
  
    var arrayPhotographersFromJson = await getPhotographersFromJson();
    var nodePhotographersList = document.querySelector("#listeDesPhotographes");
    nodePhotographersList.innerHTML = ""; // pour vider et recréer
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
   
        //verifie si le tableau contient une sous chaine de caractere, renvoie true s'il existe
        if (arrayPhotographersFromJson[i].tags.includes(tag) === true){
            var objetPhotographe = await getPhotographerObjectFromClass(arrayPhotographersFromJson[i],i);
            nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.createComposant();
        }
    }}

//fonction recupere les elements
async function getPhotographerObjectFromClass(photographe, index){
 
    var lesPhotographes = new Photographe("photographe", "photos/Sample_Photos/Photographers_ID_Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€/jour", photographe.tags, index);
    
    return lesPhotographes;}

