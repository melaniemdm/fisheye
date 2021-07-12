/* class Courtmetrage pour les medias des photographes au format video */
/*---ajoute le fichier video dans la variable media---*/
class Courtmetrage {
    constructor(video) {
        this._type = "courtmetrage";
        this.medias = video;
    }
    //fonction qui crait le composant média
    creatComposant() {
        let composantElementMedia;
        composantElementMedia = 
     ` <a
  data-lg-size="1280-720"
  data-video='{"source": [{"src":"`+ this.url + this.medias + `", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
  data-poster="` + this.url +this.medias + `.webp" data-sub-html="<h4 class='titleInGallery'>`+this.title +`</h4>" >
  <img src="` + this.url + this.medias + `.webp" alt="`+ this.title +  `"/><div class="infoContenair"><div class="titleMedias"> `+this.title + `</div><div class="likes"> <div id="likes_`+ this.id +`"> ` + this.like + `  </div>
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
}
export { Courtmetrage };