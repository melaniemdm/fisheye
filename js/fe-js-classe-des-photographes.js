/* definition du model qyui permet de créer des objets photographe*/
class Photographe {
    /* fonction qui va se lancer lorsque l'on va créer un objet photographe grace à new*/
    constructor(type, photo, id, nom, city, country, tagline, price, tags, index) {
        this._type = type;
        this.photo = photo;
        this.id = id;
        this.nom = nom;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tag = tags;
        this.index = index+10 ;
    }
    /*fonction qui permet de créer le composant html a afficher sous forme de chaine de caractere */
    getComposantHtml() {
        var strComposant =
            `<div class="contenairPhotographe" >
                <a href="medias-des-photographe.html?idPhotographe=` + this.id + `" tabindex="-1">
                    <div class="photoIdDuPhotographe" tabindex="` + this.index + `1">
                        <img src=" ` + this.photo +`" alt="`+this.nom+`">
                        <h2 class="nomDuPhotographe">` + this.nom + ` </h2>    
                    </div>
                    <div class="infoDuPhotographe" tabindex="` + this.index + `2">
                        <div class="localisation"> 
                            <div class="cityDuPhotographe">` +  this.city + ",&nbsp; "+ ` </div> <div class="countryDuPhotographes">` + this.country + ` </div>
                        </div>
                        <div class="taglineDuPhotographe"> ` + this.tagline + `</div>
                        <div class="priceDuPhotographe">` + this.price + `</div>
                    </div></a>`;
                
        strComposant =strComposant +
                    '<div class=""><nav class ="tagsDuPhotographe" tabindex="' + this.index + '3">';
        //  boucle qui permet de mettre le #
        this.tag.forEach((element) => {
            strComposant = strComposant + 
                     `<div class="tags">
                     <span role="button" onclick="displayAllPhotographersTagues('`+element +`')" aria-label="tag ` + element + '" tabindex="' + this.index + '3">'  + "#" + element +  " </span></div>";
        });
        strComposant = strComposant +
                    `</nav> </div> 
            ` + `</div>`;
        /* retourne la chaine de caractere créée  */
        return strComposant;
    }
    /*fonction qui permet de créer le composant html a afficher sous forme de chaine de caractere */
    getComposantHtmlLarge() {
        var strComposant =
    `
            <div class="contenairPhotographeLarge">
                <div class="photoIdDuPhotographeLarge" tabindex="8">
                    <img src=" ` + this.photo + `" alt="`+this.nom+`">
                </div>
                <div class="contact" > 
                    <div tabindex="7" role="button" aria-label="contact me" class="btn-contact" id="btn-contact"> Contactez-moi </div>
                </div>
                <div class="infoDuPhotographeLarge" >
                    <h1 class="nomDuPhotographeLarge" tabindex="0">` + this.nom + `  </h1>
                    <div class="localisationLarge" tabindex="1  ">        
                        <div class="cityDuPhotographeLarge" >` + this.city + ",&nbsp "+ ` </div> <div class="countryDuPhotographesLarge">` + this.country +` </div> 
                        </div>
                    <div class="taglineDuPhotographeLarge"> ` + this.tagline +  `</div>`;
        strComposant =strComposant +'<div class ="tagsDuPhotographeLarge">';
        //  boucle qui permet de mettre le #
        let tagIndex = 3;
        this.tag.forEach((element) => {
            strComposant =  strComposant + `<div onclick="launchDisplayPhotographersbytags('`+ element +`')" role="button" class="tags" tabindex="`+ tagIndex +'">'  + "#" + element + " </div>";
            tagIndex++;
        });
        strComposant = strComposant +`
                        </div>  
                    </div> 
                </div> 
                <div id="likePriceFooter">
                    <div class="likePriceFooter"> <span id="totalLikesPage"> 0 </span> <span  aria-label="likes"class="material-icons-outlined title="likes_">favorite
                    </span> `+this.price +` </div></div>`;
        return strComposant;
    }
}
export { Photographe };
