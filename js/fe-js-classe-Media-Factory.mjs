import { Photo } from './fe-js-classe-des-photos.mjs';
import { Courtmetrage } from './fe-js-classe-courtmetrage.mjs';

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
            <div class="infoPhoto">
  <div class="title_media"> ` +
            media.title +
            `</div>
            
  <div class="likes"> ` +
            media.like +
            `
  <div class="heart"> <i class="fas fa-heart"></i></div></div>
  </div></div>`;
  
          return composantElementMedia;
        };
        return media;
      };
    }
  }
  
  export { MediaFactory }