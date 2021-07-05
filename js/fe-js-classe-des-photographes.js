// creation des types de classes specifiques aux artistes (dans le cas ou ils y auraient d'autres artistes autres que des photographes)
class Photographe {
    /* class qui peut s'exporter*/
    constructor(type, photo, id, nom, city, country, tagline, price, tags) {
        this._type = type;
        this.photo = photo;
        this.id = id;
        this.nom = nom;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tag = tags;

        this.createComposant = function () {
            var strComposant =
        `<div class="contenairPhotographe">
            <a href="medias-des-photographe.html?idPhotographe=` + this.id + `">
        <div class="photoIdDuPhotographe">
            <img src=" ` + this.photo +`" alt="`+this.nom+`"></div>
        <div class="infoDuPhotographe">
        <div class="nomDuPhotographe">` + this.nom + ` </div>
        <div class="localisation"> 
        <div class="cityDuPhotographe">` +  this.city + ", "+ ` </div> <div class="countryDuPhotographes">` + this.country + ` </div>
        </div>
        <div class="taglineDuPhotographe"> ` + this.tagline + `</div>
        <div class="priceDuPhotographe">` + this.price + `</div>`;
            
            strComposant =strComposant +'<div class ="tagsDuPhotographe">';
            //  boucle qui permet de mettre le #
            this.tag.forEach((element) => {
                strComposant = strComposant + ' <div class="tags">'  + "#" + element + " </div>";
            });
            strComposant = strComposant +`</div> </a>` + `</div> </div>`;

            return strComposant;
        };

        this.createComposantLarge = function () {
            var strComposant =
        `<a href="medias-des-photographe.html?idPhotographe=` + this.id + `" ></a>
    <div class="contenairPhotographeLarge">

    <div class="photoIdDuPhotographeLarge">
        <img src=" ` + this.photo + `" alt="`+this.nom+`">
    </div>
    <div class="toto"> 
    
    <div class="btn-contact" id="btn-contact"> Contactez-moi </div>
    </div>
    
    <div class="infoDuPhotographeLarge">
    <div class="nomDuPhotographeLarge">` + this.nom + ` </div>
    <div class="localisationLarge">        
    <div class="cityDuPhotographeLarge">` + this.city + ", "+ ` </div> <div class="countryDuPhotographesLarge">` + this.country +` </div> 
    </div>
    <div class="taglineDuPhotographeLarge"> ` + this.tagline +  `</div>`;
            strComposant =strComposant +'<div class ="tagsDuPhotographeLarge">';
            //  boucle qui permet de mettre le #
            this.tag.forEach((element) => {
                strComposant =  strComposant + ' <div class="tags">'  + "#" + element + " </div>";
            });
            strComposant = strComposant +`</div>  
    </div> 
    </div> 
    <div id="likePriceFooter">
    <div class="likePriceFooter"> 297 081 <span  aria-label="likes"class="material-icons-outlined title="likes_">favorite
    </span> `+this.price +` </div></div>
        </a> `;

            return strComposant;
        };
       
    }

}

export { Photographe };
