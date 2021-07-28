/*import des classes photos & courtmetrage depuis les fichiers de class*/
import { Photo } from './fe-js-classe-des-photos.mjs';
import { Courtmetrage } from './fe-js-classe-courtmetrage.mjs';
/*création factory method qui permet la création du composant image & video*/
class MediaFactory {
    //permet de creer la factory des medias ou appelé objet
    constructor() {
    }
    //fonction avec les paramètre de la création d'un media
    createMedia (type, url, image, video, title, like, id, alt_text, price) {
        let media;
       
        //conditions qui permetent de gerer la création des medias specifiques
        if (type === "courtmetrage") {
            media = new Courtmetrage(video);
        }
        if (type === "photo") {
            media = new Photo(image);
        }
        //ajout des caracteristiques ou attributs des medias (sous variables)
        media.title = title;
        media.like = like;
        media.id = id;
        media.url = url;
        media.alt_text = alt_text;
        media.price =price;
        return media;
    }
}
export { MediaFactory };