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
     ` <a
  data-lg-size="1280-720"
  data-video='{"source": [{"src":"`+ this.url + this.medias + `", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
  data-poster="` + this.url +this.medias + `.webp" data-sub-html="<h4 class='titleInGallery'>`+this.title +` - `+ this.price+`€</h4>" >
  <img src="` + this.url + this.medias + `.webp" alt="`+ this.alt_text +  `"/><div class="infoContenair"><div class="titleMedias"> `
  +this.title + `</div><div class="likes"> <div id="likes_`+ this.id +`"> ` + this.like + `  </div>
<div class="heart" "> 
<span  aria-label="likes"class="material-icons-outlined" title="likes_`+ this.id + `">favorite
</span>
 </div>
</div>
</div>
</div>
</a>   `;
        
        return composantElementMedia;
    }
    //fonction qui crait le composant miniature
    getComposantMiniatureHTML() {
        let composantElementMedia;
        composantElementMedia =
  ` 
  <div class="miniature">
    <img src="` + this.url + this.medias + `.webp" alt="`+ this.alt_text +  `" class="miniatureItem"/>
  </div>
  `;
        return composantElementMedia;
    }
}
export { Courtmetrage };