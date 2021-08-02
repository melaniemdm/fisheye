/* import mediafactory*/
import { MediaFactory } from './fe-js-classe-Media-Factory.mjs';
/*ajout event sur tri pour changer l'ordre*/
var nodeSort = document.querySelector("#filtre");
nodeSort.addEventListener("click", changePhotoOrder );
//initialisation de l'id pohtotographe en variable globale pour que toutes les fonctions puissent l'utiliser sans avoir a le recuperer dans l'url
var idPhotographe = 0;

/* fonction qui affiche tous les medias*/
export async function displayMediasForOnePhotographer(id, sort) {
    idPhotographe=id;
    //recupere le tableau media dans le json
    var arrayMediasSort = await getMediaFromJson(sort);
    //initialisation du session storage du compteur
    let totalLikes =  0;

    let strComposantMiniature = "";
    //création de la factory
    let newMediasFactory = new MediaFactory();
    //recupere le prenom du photographe
    let prenomDossierPhoto = document.querySelector(".nomDuPhotographeLarge").innerHTML.split(" ")[0];
    //boucle
    for (let i = 0; i < arrayMediasSort.length; i++) {
        // initialisation variable     
        var choixMedia; 
        //definir image ou video
        if(arrayMediasSort[i].image){
            choixMedia = "photo";
        }else{
            choixMedia = "courtmetrage";
        }
        if (arrayMediasSort[i].photographerId === parseInt(idPhotographe)){
            let media = newMediasFactory.createMedia(
                // stock le retour de la fonction dans la variable - doit avoir le même orthographe
                choixMedia,"photos/Sample_Photos/" + prenomDossierPhoto + "/" ,arrayMediasSort[i].image, arrayMediasSort[i].video,  arrayMediasSort[i].title, arrayMediasSort[i].likes, arrayMediasSort[i].id, arrayMediasSort[i].alt_text, arrayMediasSort[i].price );
            //affiche les medias
            var nodeMediaList = document.querySelector("#lightgallery");
            nodeMediaList.innerHTML = nodeMediaList.innerHTML + media.getComposantHtml();
            //ajout du composant miniature
            strComposantMiniature = strComposantMiniature + media.getComposantMiniatureHTML();
            //calcul du total de like de la page
            totalLikes = totalLikes+ media.like;
        }
    }

    /*appel fonction chargement gallery */
    launchGallery(); 
    /*parametre du click sur le heart*/    
    addClickHeart();
    //afficher nbre total de like
    let compteurLike = document.querySelector("#totalLikesPage");
    compteurLike.innerHTML = totalLikes;
    //une fonction async appelée doit toujours renvoyer quelque chose
    //Chargement des miniatures
    document.querySelector("#miniature").innerHTML = "";
    document.querySelector("#miniature").innerHTML = strComposantMiniature;
    return 0;
}

/* fonction qui recupere le json*/
async function getMediaFromJson(sort) {
    let url = "https://melaniemdm.github.io/fisheye/json/FishEyeData.json";
    let rep = await fetch(url, { method: "GET" });
    let reponse = await rep.json();
    var arrayMedias = reponse["media"];
    // appel de la fonction de tri
    //ordre croissant
    let direction = 1;
    //ordre décroissant
    if(sort === "likes"){
        direction = -1; // sens inverse
    }
    var arrayMediasSort = await sortByProperty(arrayMedias, sort, direction); // appel de la fonction sort
    return arrayMediasSort;
}
/*function parametre du click sur le heart*/
function addClickHeart(){
    //click du heart
    var nodeHearts = document.querySelectorAll(".heart");
    nodeHearts.forEach(nodeheart => nodeheart.addEventListener("click", addOneLike));
    return 0;
}
/*ajout un like au heart*/
function addOneLike(event){
    //recupere l'id - le title de la cible
    var nodeLikesId = event.target.title;
    //empeche le rechargement de la page
    event.preventDefault();
    event.stopImmediatePropagation();
    //recupere le noeud de l'id 
    let nodeLikes = document.querySelector("#" + nodeLikesId);
    //agremente de compteur des likes
    nodeLikes.innerHTML =  parseInt(nodeLikes.innerHTML) +1;
    //fonctionnement du total like
    let nodetotalLike = document.querySelector ("#totalLikesPage");
    nodetotalLike.innerHTML =  parseInt(nodetotalLike.innerHTML) +1;
    return 0;
}
/*fonction de chargement de la gallery*/
function launchGallery(){
    //chargement de la galery 
    // window.lightGallery(document.getElementById('lightgallery'), {
    //     plugins: [window.lgZoom, window.lgThumbnail, window.lgVideo],
    //     speed: 500,
    //     addClass:".fe-galery",
    //     videojs: true });
    // return 0;
    window.chargeGallery(document.getElementById('lightgallery'));
}
/*fonction qui recupere la valeur du tri*/
function changePhotoOrder(event) {
    var sort = event.target.title;
    var id = idPhotographe;
    document.querySelector("#lightgallery").innerHTML = ""; // pour vider et recréer
    displayMediasForOnePhotographer(id, sort);
    return 0;
}
/*fonction de sort*/
async function sortByProperty(objArray, prop, direction) {
    if (arguments.length < 2)
        throw new Error(
            "ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION"
        );
    if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
    const clone = objArray.slice(0);
    const direct = arguments.length > 2 ? arguments[2] : direction; //Default to ascending
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

/*Gestion de l'expended de trier par*/
let nodefiltre = document.querySelector("#filtre");

nodefiltre.addEventListener("mouseover", changeAria );
function changeAria(){
    nodefiltre.setAttribute("aria-expanded", true);
}


nodefiltre.addEventListener("mouseout", removeChangeAria );
function removeChangeAria(){
    nodefiltre.setAttribute("aria-expanded", false);
}
