import { Photographe } from './fe-js-classe-des-photographes.js';
/*Affiche tous les photographes*/
export async function displayAllPhotographers (){
    //recupere les photographes dans le json
    var arrayPhotographersFromJson = await getPhotographersFromJson();
    //boucle
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
        //recupere l'objet photographe  créé grâce à la class
        let photographe = arrayPhotographersFromJson[i]; // i ème photgraphe du tableau
        var newPhotographe = new Photographe("photographe", "photos/Sample_Photos/Photographers_ID_Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€&nbsp/jour", photographe.tags, i);
        //recupere le noeud de la liste des photographes
        var nodePhotographersList = document.querySelector("#listeDesPhotographes");
        //créer le composdant html du photographe et l'ajoute a la page html
        nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + newPhotographe.getComposantHtml(); // appel de la method et la method renvoie le code html qui correspond aux photographes
    }
    return 0;
}
/* fonction qui recupere le json*/
async function getPhotographersFromJson() {
    let url = "https://melaniemdm.github.io/fisheye/json/FishEyeData.json";
    let rep = await fetch(url, { method: "GET" });
    let reponse = await rep.json();
    let arrayPhotographers = reponse["photographers"];
    return arrayPhotographers;}


/*fonction qui affiche UN photographe dans la page Media*/
export async function displayOnePhotographer (id){
    //recupere les photographes dans le json
    var arrayPhotographersFromJson = await getPhotographersFromJson();
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
        if (arrayPhotographersFromJson[i].id === parseInt(id)){
            var nodePhotographersList = document.querySelector("#lePhotographe");
            //demande a recuperer l'object grace a la class des photographes avec les infos recuperé dans le json
            let photographe = arrayPhotographersFromJson[i];
            var objetPhotographe = new Photographe("photographe", "photos/Sample_Photos/Photographers_ID_Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€&nbsp/jour", photographe.tags, i);
            nodePhotographersList.innerHTML = objetPhotographe.getComposantHtmlLarge();
        } 
    }
    return 0;
}

/*fonction qui affiche les photographes en fonction du tag*/
export async function displayAllPhotographersTagues (tag){
    var arrayPhotographersFromJson = await getPhotographersFromJson();
    var nodePhotographersList = document.querySelector("#listeDesPhotographes");
    nodePhotographersList.innerHTML = ""; // pour vider et recréer afin d'éviter d'ajouter la liste complete
    for (let i = 0; i < arrayPhotographersFromJson .length; i++) { 
        //verifie si le tableau contient une sous chaine de caractere, renvoie true s'il existe
        if (arrayPhotographersFromJson[i].tags.includes(tag) === true){
            //demande a recuperer l'object grace a la class des photographes avec les infos recuperé dans le json
            let photographe = arrayPhotographersFromJson[i];
            var objetPhotographe = new Photographe("photographe", "photos/Sample_Photos/Photographers_ID_Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€&nbsp/jour", photographe.tags, i);
            nodePhotographersList.innerHTML = nodePhotographersList.innerHTML + objetPhotographe.getComposantHtml(); //  ajoute le composant html du photographe dans le <div "liste des photographes"
        }
    }
    return 0;
}

