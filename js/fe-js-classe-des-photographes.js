// creation des types de classes specifiques aux artistes (dans le cas ou ils y auraient d'autres artistes autres que des photographes)
class Photographe {
    /* class qui peut s'exporter*/
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

        this.createComposant = function () {
            var strComposant =
        `<div class="contenairPhotographe" >
            <a href="medias-des-photographe.html?idPhotographe=` + this.id + `" tabindex="-1">
                <div class="photoIdDuPhotographe" tabindex="` + this.index + `1">
                    <img src=" ` + this.photo +`" alt="`+this.nom+`">
                    <h2 class="nomDuPhotographe">` + this.nom + ` </h2>    
                </div>
                <div class="infoDuPhotographe" tabindex="` + this.index + `2">
                    <div class="localisation"> 
                        <div class="cityDuPhotographe">` +  this.city + ", "+ ` </div> <div class="countryDuPhotographes">` + this.country + ` </div>
                    </div>
                    <div class="taglineDuPhotographe"> ` + this.tagline + `</div>
                    <div class="priceDuPhotographe">` + this.price + `</div>
                </div></a>`;
            
            strComposant =strComposant +
                '<div class=""><nav class ="tagsDuPhotographe" tabindex="' + this.index + '3">';
            //  boucle qui permet de mettre le #
            this.tag.forEach((element) => {
                strComposant = strComposant + 
                `    <div class="tags"><span role="button" onclick="displayAllPhotographersTagues('`+element +`')" aria-label="tag  `  + element +'">'  + "#" + element + " </span></div>";
            });
            strComposant = strComposant +
                `</nav> </div>  
            ` + 
        `</div>`;

            return strComposant;
        };

        this.createComposantLarge = function () {
            var strComposant =
        `<a href="medias-des-photographe.html?idPhotographe=` + this.id + `" ></a>
    <div class="contenairPhotographeLarge">

    <div class="photoIdDuPhotographeLarge" tabindex="8">
        <img src=" ` + this.photo + `" alt="`+this.nom+`">
    </div>

    <div class="contact" tabindex="7"> 
    
    <div role="button" aria-label="contact me" class="btn-contact" id="btn-contact"> Contactez-moi </div>
    </div>
    
    <div class="infoDuPhotographeLarge" >
    <h1 class="nomDuPhotographeLarge" tabindex="0">` + this.nom + `  </h1>
    <div class="localisationLarge" tabindex="1  ">        
    <div class="cityDuPhotographeLarge" >` + this.city + ", "+ ` </div> <div class="countryDuPhotographesLarge">` + this.country +` </div> 
    </div>
    <div class="taglineDuPhotographeLarge"> ` + this.tagline +  `</div>`;
            strComposant =strComposant +'<div class ="tagsDuPhotographeLarge">';
            //  boucle qui permet de mettre le #
            let tagIndex = 3;
            this.tag.forEach((element) => {
                strComposant =  strComposant + `<div onclick="launchDisplayPhotographersbytags('`+ element +`')" role="button" class="tags" tabindex="`+ tagIndex +'">'  + "#" + element + " </div>";
                tagIndex++;
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
