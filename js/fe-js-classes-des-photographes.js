// creation des types de classes specifiques aux artistes (dans le cas ou ils y auraient d'autres artistes autres que des photographes)
class Photographe {
    constructor() {
      this._type = "photographe";
    }
  }
  //création factory method qui permet de fabriquer le composant générique
  class ArtistesFactory {
    //permet de creer la fabrique des Artistes
    constructor() {
      //fonction avec les paramètre de la création d'un artiste
      this.creatArtistes = function (
        type,
        photo,
        id,
        nom,
        city,
        country,
        tagline,
        price,
        tags
      ) {
        let artiste;
        //condition qui permet de gerer la création des artistes specifiques
        if (type == "photographe") {
          artiste = new Photographe();
        }
  
        //ajout des caracteristiques des artistes
        artiste.photo = photo;
        artiste.id = id;
        artiste.nom = nom;
        artiste.city = city;
        artiste.country = country;
        artiste.tagline = tagline;
        artiste.price = price;
        artiste.tag = tags;
  
        //fonction qui creait le composant Artiste
        artiste.createComposant = function () {
          var strComposant =
            `<div class="contenairPhotographe">
    <a href="medias-des-photographe.html?idPhotographe=` +
            artiste.id +
            `">
    <div class="photoIdDuPhotographe">
        <img src=" ` +
            artiste.photo +
            `">
    </div>
    <div class="infoDuPhotographe">
    <div class="nomDuPhotographe">` +
            artiste.nom +
            ` </div>
    <div class="cityDuPhotographe">` +
            artiste.city +
            ` </div> <div class="countryDuPhotographes">` +
            artiste.country +
            ` </div>
    <div class="taglineDuPhotographe"> ` +
            artiste.tagline +
            `</div>
    <div class="priceDuPhotographe">` +
            artiste.price + `</div>`;
            strComposant =strComposant +'<div class ="tagsDuPhotographe">';
          //  boucle qui permet de mettre le #
          artiste.tag.forEach((element) => {
            strComposant =
              strComposant + ' <div class="tags">'  + "#" + element + " </div>";
          });
          strComposant = strComposant +`</div> </a>` + `</div> </div>`;
  
          return strComposant;
        };
      //fonction qui creait le composant Artiste vue Large
      artiste.createComposantLarge = function () {
        var strComposant =
          `<div class="contenairPhotographeLarge">
  <a href="medias-des-photographe.html?idPhotographe=` +
          artiste.id +
          `">
  <div class="photoIdDuPhotographe">
      <img src=" ` +
          artiste.photo +
          `">
  </div>
  <div class="infoDuPhotographe">
  <div class="nomDuPhotographe">` +
          artiste.nom +
          ` </div>
          <div class="btn-contact" id="btn-contact"> Contactez-moi </div>
  <div class="cityDuPhotographe">` +
          artiste.city +
          ` </div> <div class="countryDuPhotographes">` +
          artiste.country +
          ` </div>
  <div class="taglineDuPhotographe"> ` +
          artiste.tagline +
          `</div>`;
          strComposant =strComposant +'<div class ="tagsDuPhotographe">';
        //  boucle qui permet de mettre le #
        artiste.tag.forEach((element) => {
          strComposant =
            strComposant + ' <div class="tags">'  + "#" + element + " </div>";
        });
        strComposant = strComposant +`</div> </a>` + `</div> </div>`;

        return strComposant;
      };
        return artiste;
      };
    }
  }