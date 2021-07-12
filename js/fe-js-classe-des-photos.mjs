/* class Photo pour les medias des photographes au format image */
/*---ajoute le fichier image dans la variable media---*/
class Photo {
    constructor(image) {
        this._type = "photo";
        this.medias = image;
    }
    //fonction qui crait le composant média
    creatComposant() {
        let composantElementMedia;
        composantElementMedia =
  ` 
<a href="` +this.url+`galeryGrdeTaille/` + this.medias + `" onclick="return false;" class="light-link" data-sub-html=" <h4 class='titleInGallery'>`+ this.title +  `</h4>"> <img src="`+ this.url + this.medias + `" alt="`+ this.title+  `"/><div class="infoContenair"><div class="titleMedias"> `+ this.title+`</div><div class="likes"><div aria-label="nombre de likes" id="likes_`+ this.id +`"> ` +   this.like + `</div>
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
}
export { Photo };