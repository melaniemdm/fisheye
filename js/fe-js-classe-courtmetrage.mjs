/* class Courtmetrage pour les medias des photographes au format video */
/*---ajoute le fichier video dans la variable media---*/
class Courtmetrage {
    constructor(video) {
        this._type = "courtmetrage";
        this.medias = video;
    }
    //fonction qui crait le composant média
    getComposantHtml() {
        let composantElementMedia;
        composantElementMedia =
` 
<a href="` +this.url+`galeryGrdeTaille/` + this.medias + `" onclick="return false;" class="light-link courtmetrage" data-sub-html=" <h4 class='titleInGallery'>`+ this.title + ` - `+ this.price+`€</h4>"> 
<img src="`+ this.url + this.medias + `.webp" alt="`+ this.alt_text+  `" class="galleryItem" data-src="` + this.url + this.medias + `"/>
<div class="infoContenair">
  <div class="titleMedias"> `+ this.title+ `</div>
  <div class="likes">
    <div aria-label="nombre de likes" id="likes_`+ this.id +`"> ` +   this.like + `</div>
    <div class="heart" role="button" aria-label="ajouter un like"> 
      <span  aria-label="likes" class="material-icons-outlined" title="likes_`+ this.id + `">favorite
      </span>
    </div>
  </div>
</div>
</a> 
`;
        return composantElementMedia;
    }
    //fonction qui crait le composant miniature
    getComposantMiniatureHTML() {
        let composantElementMedia;
        composantElementMedia =
` 
<div class="miniature courtmetrage" data-sub-html=" <h4 class='titleInGallery'>`+ this.title + ` - `+ this.price+`€</h4>">
  <img src="` + this.url + this.medias + `.webp" alt="`+ this.alt_text +  `" class="miniatureItem" data-src="` + this.url + this.medias + `"/>
</div>
`;
        return composantElementMedia;
    }
}
export { Courtmetrage };