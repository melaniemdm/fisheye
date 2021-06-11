import { MediaFactory } from './fe-js-classe-Media-Factory.mjs'

//variable globale
var idPhotographe = 0;

//Affiche le media en ajoutant le composant et le contenu dans la page html
function displaysPhotographersMedias(media) {
  var nodeMediaList = document.querySelector("#lightgallery");
  var mediaComponent =  createPhotographersMedia(media)
  nodeMediaList.innerHTML = nodeMediaList.innerHTML + mediaComponent;
  }
//evenement sur le noeud
 var nodeSort = document.querySelector("#filtre")
 nodeSort.addEventListener("click", changePhotoOrder )

//fonction qui recupere la valeur du tri
  function changePhotoOrder(event) {
    console.log(event.target.title)
    var sort = event.target.title
    var id = idPhotographe
document.querySelector("#lightgallery").innerHTML = "" // pour vider et recréer
addPhotographersMedias(id, sort)
    }
    
//fonction qui permet de creer le composant html
function createPhotographersMedia(media) {
   var composantElementMedia = media.creatComposant()
        return composantElementMedia;
}
// fonction qui recupere le json
async function getMediaFromJson(sort) {
  let url = "http://127.0.0.1:5501/json/FishEyeData.json";
  let rep = await fetch(url, { method: "GET" });
  let reponse = await rep.json();
  var arrayMedias = reponse["media"];
// appel de la fonction de tri
  var arrayMediasSort = await sortByProperty(arrayMedias, sort, 1); // appel de la fonction sort
  return arrayMediasSort;
}
 
//fonction qui recupere un media ojbect grace à la function de creation de la factory
function getMediaObjectFromFactory(numMedia) {
  let lesMedias = new MediaFactory();
  let nomSplit = document.querySelector(".nomDuPhotographe").innerHTML.split(" ")[0]
  var choixMedia 
  if(numMedia.image){
choixMedia = "photo"
  }else{
choixMedia = "courtmetrage"
  }
  return lesMedias.createMedia(
  // stock le retour de la fonction dans la variable
          choixMedia,"photos/sample%20Photos/" + nomSplit + "/" ,  numMedia.image,
               numMedia.video,
        numMedia.title,
        numMedia.likes
      )
    }

// fonction qui affiche tous les medias
export async function addPhotographersMedias(id, sort) {
  idPhotographe=id
  var arrayMedias = await getMediaFromJson(sort);
  //boucle
  for (let i = 0; i < arrayMedias.length; i++) {
    var media =getMediaObjectFromFactory(arrayMedias[i])    
    if (arrayMedias[i].photographerId == id){
    displaysPhotographersMedias(media)
  }}
  return 0
 }
 
//fonction de sort
async function sortByProperty(objArray, prop, direction) {
  if (arguments.length < 2)
    throw new Error(
      "ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION"
    );
  if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
  const clone = objArray.slice(0);
  const direct = arguments.length > 2 ? arguments[2] : 1; //Default to ascending
  const propPath = prop.constructor === Array ? prop : prop.split(".");
  clone.sort(function (a, b) {
    for (let p in propPath) {
      if (a[propPath[p]] && b[propPath[p]]) {
        a = a[propPath[p]];
        b = b[propPath[p]];
      }
    }
    //converti les ssortng en nombre
    if(isNaN(a)){
    a = a.match(/^\d+$/) ? +a : a;
    b = b.match(/^\d+$/) ? +b : b;
  }
    return a < b ? -1 * direct : a > b ? 1 * direct : 0;
  });
  return clone;
}
