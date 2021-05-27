// creation des types de classes specifiques aux medias
class Photo{
  constructor(){
    this._type = "photo"
       }
}
class Courtmetrage{
  constructor(){
    this._type = "courtmetrage"
       }
}

//création factory method qui permet de fabriquer le composant générique
class MediaFactory{
  //permet de creer la fabrique des medias
  constructor(){
    //fonction avec les paramètre de la création d'un media
    this.createMedia= function(type, medias, title, like, heart){
      let media

      //conditions qui permetent de gerer la création des medias specifiques
      if (type == "courtmetrage") {
        media = new Courtmetrage()
      }
      if (type == "photo") {
      media = new Photo()
       }

       //ajout des caracteristiques des medias
      media.medias = medias;
      media.title = title;
      media.like = like;
      


//fonction qui crait le composant média
      media.creatComposant = function(){
      var composantElementMedia= `<div class="contenairMedia">
<div class="photoIdPhotographes"><img src="` + media.medias +`"></div>
<div class="title"> `+ media.title + `</div>
<div class="likes"> `+ media.like + `</div>
<div class="heart"> <i class="fas fa-heart"></i></div>
</div>`

    return composantElementMedia
      }
      return media
    }
  }
}

//variable qui permet de creer une nouvelle fabrique - instance de fabrique
let lesMedias = new MediaFactory()


//fonction qui ajoute le composant et le contenu dans la page html
async function ajoutComposantDansMediasPhotographes(idPhotographes){
var listeMedias = document.querySelector("#listeDesMediasDuPhotographe")
var composantMedia = await creationComposantMediaPhotographe (idPhotographes)
for(i=0;i<composantMedia.length;i++){
listeMedias.innerHTML = listeMedias.innerHTML + composantMedia[i]
}
}

//fonction qui permet de creer le composant html
async function creationComposantMediaPhotographe (idPhotographes){
var elementDeLaPhoto = await ajoutMediaDuPhotographe(idPhotographes)
var compteur =0
var listeDesComposants = new Array()
for(i=0;i<elementDeLaPhoto.length;i++){
  var composantElementMedia= elementDeLaPhoto[i].creatComposant()
  listeDesComposants[compteur]= composantElementMedia
  compteur++
}
return listeDesComposants
}
// fonction qui recupere le json
async function recupereJsonMedia(){
  let url = 'http://127.0.0.1:5501/json/FishEyeData.json'
  let rep = await fetch(url, { method: 'GET' });
let reponse = await rep.json();
var tabloMedias = reponse["media"]
console.log(tabloMedias)
var tabloMediaTrie = await sortByProperty(tabloMedias, "title", 1) // tri par titre
return tabloMediaTrie
}

//fonction qui recupere l'élément média, permet de creer le media
async function recuperationElementMedia(idMedia){
// stock le retour de la fonction dans la variable 
var tabloMedias =  await recupereJsonMedia()
//Boucle pour afficher tous les medias
for(i=0;i<tabloMedias.length;i++){
  console.log(tabloMedias[i].id) // recupere les id dans la console
  if(tabloMedias[i].id== idMedia){
var tableauElementsMedia = lesMedias.createMedia("photo","photos/sample%20Photos/Tracy/"+ tabloMedias[i].image,  tabloMedias[i].title, tabloMedias[i].likes)
  }
}
 return tableauElementsMedia
}
// fonction qui affiche tou sles medias
async function ajoutMediaDuPhotographe(idPhotographes){
  var tabloMedias =  await recupereJsonMedia()
  var listeDesMedias = new Array()
var compteur =0
  for(i=0;i<tabloMedias.length;i++){
    if(tabloMedias[i].photographerId== idPhotographes){
      var recuptNomPhotographe = document.querySelector(".nomDuPhotographe")
    var resultatNom =   recuptNomPhotographe.innerHTML

var nomSplit = resultatNom.split(" ")[0]
console.log( nomSplit)
      var tableauElementsMedia = lesMedias.createMedia("photo","photos/sample%20Photos/"+ nomSplit +"/"+ tabloMedias[i].image,  tabloMedias[i].title, tabloMedias[i].likes)
      listeDesMedias[compteur]= tableauElementsMedia
      compteur++
        }
      }
  return listeDesMedias
}
//fonction de tri 
async function sortByProperty(objArray, prop, direction){
  if (arguments.length<2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
  if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
  const clone = objArray.slice(0);
  const direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending
  const propPath = (prop.constructor===Array) ? prop : prop.split(".");
  clone.sort(function(a,b){
      for (let p in propPath){
              if (a[propPath[p]] && b[propPath[p]]){
                  a = a[propPath[p]];
                  b = b[propPath[p]];
              }
      }
      //convert numeric strings to integers
      a = a.match(/^\d+$/) ? +a : a;
      b = b.match(/^\d+$/) ? +b : b;
      return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
  });
  return clone;
}










































