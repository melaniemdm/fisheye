/* import mediafactory*/
import { MediaFactory } from './fe-js-classe-Media-Factory.mjs';


/*ajout event sur tri pour changer l'ordre*/
var nodeSort = document.querySelector("#filtre");
nodeSort.addEventListener("click", changePhotoOrder );
//initialisation de l'id pohtotographe en variable globale pour que toutes les fonctions puissent l'utiliser sans avoir a le recuperer dans l'url
var idPhotographe = 0;

/* fonction qui affiche tous les medias*/
export async function addPhotographersMedias(id, sort) {
    idPhotographe=id;
    //recupere le tableau media dans le json
    var arrayMedias = await getMediaFromJson(sort);
    //initialisation du session storage du compteur
    sessionStorage.setItem ("totalLikes", 0);
    //boucle
    for (let i = 0; i < arrayMedias.length; i++) {
        //pour tout les medias recuperé dans le json on créait un objet media grâce a la factory 
        var media =getMediaObjectFromFactory(arrayMedias[i]);    
        if (arrayMedias[i].photographerId === parseInt(id)){
            //affiche les medias
            displaysPhotographersMedias(media);
            //calcul du total de like de la page
            sessionStorage.setItem("totalLikes",parseInt(sessionStorage.getItem("totalLikes"))+ media.like);
        }}
    /*parametre du click sur le heart*/    
    addClickHeart();
    /*appel fonction chargement gallery */
    launchGallery();
    //afficher nbre total de like
    let compteurLike = document.querySelector("#totalLikesPage");
    compteurLike.innerHTML = sessionStorage.getItem("totalLikes");
    //une fonction async appelée doit toujours renvoyer quelque chose
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

/*fonction qui recupere un objet media grace à la function de creation de la factory*/
function getMediaObjectFromFactory(numMedia) {
    //création de la factory
    let newMediasFactory = new MediaFactory();
    //recupere le prenom du phorographe
    let nomSplit = document.querySelector(".nomDuPhotographeLarge").innerHTML.split(" ")[0];
    //definir image ou video
    var choixMedia; 
    if(numMedia.image){
        choixMedia = "photo";
    }else{
        choixMedia = "courtmetrage";
    }
    //retourne le resultat de la method createmedia de la factory
    return newMediasFactory.createMedia(
        // stock le retour de la fonction dans la variable
        choixMedia,"photos/Sample_Photos/" + nomSplit + "/" ,numMedia.image, numMedia.video,  numMedia.title, numMedia.likes, numMedia.id);
}
/*Affiche le media en ajoutant le composant et le contenu dans la page html*/
function displaysPhotographersMedias(media) {
    var nodeMediaList = document.querySelector("#lightgallery");
    var mediaComponent = createPhotographersMedia(media);
    nodeMediaList.innerHTML = nodeMediaList.innerHTML + mediaComponent;
    return 0;
}
/*fonction qui permet de creer le composant html*/
function createPhotographersMedia(media) {
    var composantElementMedia = media.creatComposant();
    return composantElementMedia;
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
    //recupere l'id
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
    window.lightGallery(document.getElementById('lightgallery'), {
        plugins: [window.lgZoom, window.lgThumbnail, window.lgVideo],
        speed: 500,
        addClass:".fe-galery",
        videojs: true });
    return 0;
}
/*fonction qui recupere la valeur du tri*/
function changePhotoOrder(event) {
    var sort = event.target.title;
    var id = idPhotographe;
    document.querySelector("#lightgallery").innerHTML = ""; // pour vider et recréer
    addPhotographersMedias(id, sort);
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
