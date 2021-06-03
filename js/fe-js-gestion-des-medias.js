// creation des types de classes specifiques aux medias
class Photo {
  constructor() {
    this._type = "photo";
  }
}
class Courtmetrage {
  constructor() {
    this._type = "courtmetrage";
  }
}

//création factory method qui permet de fabriquer le composant générique
class MediaFactory {
  //permet de creer la fabrique des medias
  constructor() {
    //fonction avec les paramètre de la création d'un media
    this.createMedia = function (type, image, video, title, like, heart) {
      let media;

      //conditions qui permetent de gerer la création des medias specifiques
      if (type == "courtmetrage") {
        media = new Courtmetrage();
        var baliseMedia = ` <video controls width="250">
        <source src="` 
        var fermetureBaliseMedia = `"</source></video>`
         media.medias = video;
      }
      if (type == "photo") {
        media = new Photo();
        var baliseMedia = `<img src="`
        var fermetureBaliseMedia = `">`
        media.medias = image;
      }

      //ajout des caracteristiques des medias
     
      media.title = title;
      media.like = like;

      //fonction qui crait le composant média
      media.creatComposant = function () {
        var composantElementMedia =
          `<div class="contenairMedia">
<div class="photoIdPhotographes">` + baliseMedia +
          media.medias +
          fermetureBaliseMedia + `</div>
<div class="title"> ` +
          media.title +
          `</div>
<div class="likes"> ` +
          media.like +
          `</div>
<div class="heart"> <i class="fas fa-heart"></i></div>
</div>`;

        return composantElementMedia;
      };
      return media;
    };
  }
}


//fonction qui ajoute le composant et le contenu dans la page html
function afficheMediasDesPhotographes(media) {
  var noeudListeDesMedias = document.querySelector("#listeDesMediasDuPhotographe");
  var composantMedia =  creationComposantMediaPhotographe(media)
  noeudListeDesMedias.innerHTML = noeudListeDesMedias.innerHTML + composantMedia;
  }
//evenement sur le noeud
 var noeudTri = document.querySelector("#filtre")
 noeudTri.addEventListener("change", changeOrdrePhoto )

//fonction qui recupere la valeur du tri
  function changeOrdrePhoto() {
    var tri = noeudTri.value
    var id = idPhotographe
document.querySelector("#listeDesMediasDuPhotographe").innerHTML = "" // pour vider et recréer
ajoutMediaDuPhotographe(id, tri)
    }
    
//fonction qui permet de creer le composant html
function creationComposantMediaPhotographe(media) {
   var composantElementMedia = media.creatComposant()
        return composantElementMedia;
}
// fonction qui recupere le json
async function recupereJsonMedia(tri) {
  let url = "http://127.0.0.1:5501/json/FishEyeData.json";
  let rep = await fetch(url, { method: "GET" });
  let reponse = await rep.json();
  var tabloMedias = reponse["media"];
// appel de la fonction de tri
  var tabloMediaTri = await sortByProperty(tabloMedias, tri, 1); // appel de la fonction tri
  return tabloMediaTri;
}
 
//fonction qui recupere l'élément média, permet de creer le media
function recupereElementMedia(numMedia) {
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
          choixMedia,
        "photos/sample%20Photos/" + nomSplit + "/" + 
        numMedia.image,
        "photos/sample%20Photos/" + nomSplit + "/" + 
        numMedia.video,
        numMedia.title,
        numMedia.likes
      )
    }

// fonction qui affiche tous les medias
async function ajoutMediaDuPhotographe(id, tri) {
  var tabloMedias = await recupereJsonMedia(tri);
  //boucle
  for (i = 0; i < tabloMedias.length; i++) {
    var media =recupereElementMedia(tabloMedias[i])    
    if (tabloMedias[i].photographerId == id){
    afficheMediasDesPhotographes(media)
  }}
 }
 
//fonction de tri
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
    //converti les string en nombre
    if(isNaN(a)){
    a = a.match(/^\d+$/) ? +a : a;
    b = b.match(/^\d+$/) ? +b : b;
  }
    return a < b ? -1 * direct : a > b ? 1 * direct : 0;
  });
  return clone;
}
