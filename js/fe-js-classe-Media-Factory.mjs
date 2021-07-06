import { Photo } from './fe-js-classe-des-photos.mjs';
import { Courtmetrage } from './fe-js-classe-courtmetrage.mjs';

//création factory method qui permet de fabriquer le composant générique
class MediaFactory {
    //permet de creer la fabrique des medias
    constructor() {
        //fonction avec les paramètre de la création d'un media
        this.createMedia = function (type, url, image, video, title, like, id) {
            let media;
            let composantElementMedia;
            //conditions qui permetent de gerer la création des medias specifiques
            if (type === "courtmetrage") {
                media = new Courtmetrage(video);
            }
            if (type === "photo") {
                media = new Photo(image);
            }
            //ajout des caracteristiques des medias
            media.title = title;
            media.like = like;
            media.id = id;
            //fonction qui crait le composant média
            media.creatComposant = function () {
                if (type === "photo"){
                    composantElementMedia =
          ` 
    <a href="` +url+`galeryGrdeTaille/` + media.medias + `" onclick="return false;" class="light-link" data-sub-html=" <h4 class='titleInGallery'>`+ media.title +  `</h4>"> <img src="`+ url + media.medias + `" alt="`+ media.title+  `"/><div class="infoContenair"><div class="titleMedias"> `+ media.title+`</div><div class="likes"><div aria-label="nombre de likes" id="likes_`+ media.id +`"> ` +   media.like + `</div>
          <div class="heart" role="button" aria-label="ajouter un like"> 
          <span  aria-label="likes" class="material-icons-outlined" title="likes_`+ media.id + `">favorite
</span>
             </div>
    </div>
    </div>
    </a> 
      `;}

                if (type === "courtmetrage"){
                    composantElementMedia = 

             ` <a
          data-lg-size="1280-720"
          data-video='{"source": [{"src":"`+ url + media.medias + `", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
          data-poster="` + url +media.medias + `.webp" data-sub-html="<h4 class='titleInGallery'>`+media.title +`</h4>" >
          <img src="` + url + media.medias + `.webp" alt="`+ media.title +  `"/><div class="infoContenair"><div class="titleMedias"> `+media.title + `</div><div class="likes"> <div id="likes_`+ media.id +`"> ` + media.like + `  </div>
      <div class="heart" "> 
      <span  aria-label="likes"class="material-icons-outlined" title="likes_`+ media.id + `">favorite
</span>
         </div>
      </div>
      </div>
      </div>
      </a>   `;

                }
 
                return composantElementMedia;
            };
            return media;
        };
    }
}
  
export { MediaFactory };