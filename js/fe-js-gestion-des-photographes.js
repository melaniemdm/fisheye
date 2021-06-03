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
          artiste.price +
          `</div>`;
        ('<div class ="tagsDuPhotographe">');
        //  boucle qui permet de mettre le #
        artiste.tag.forEach((element) => {
          strComposant =
            strComposant + ' <div class="tags">' + "#" + element + " </div>";
        });
        strComposant = strComposant + `</a>` + `</div>`;

        return strComposant;
      };
      return artiste;
    };
  }
}

// fonction qui recupere le json
async function recupereJsonPhotographes() {
  let url = "http://127.0.0.1:5501/json/FishEyeData.json";
  let rep = await fetch(url, { method: "GET" });
  let reponse = await rep.json();
  let tabloPhotographes = reponse["photographers"];

return tabloPhotographes}

//fonction affiche les photographes
async function afficheLesPhotographes (){
  var tabloPhotographesRecuperer = await recupereJsonPhotographes()
  for (i = 0; i < tabloPhotographesRecuperer .length; i++) { 
var noeudListePhotographes = document.querySelector("#listeDesPhotographes")
var objetPhotographe = await recupereElementPhotographe(tabloPhotographesRecuperer[i])
noeudListePhotographes.innerHTML = noeudListePhotographes.innerHTML + objetPhotographe.createComposant()
  }
}

//fonction affiche UN photographe dans la page Media
async function afficheLePhotographes (id){
  var tabloPhotographesRecuperer = await recupereJsonPhotographes()
  for (i = 0; i < tabloPhotographesRecuperer .length; i++) { 
    if (tabloPhotographesRecuperer[i].id == id){
var noeudListePhotographes = document.querySelector("#lePhotographe")
var objetPhotographe = await recupereElementPhotographe(tabloPhotographesRecuperer[i])
noeudListePhotographes.innerHTML = noeudListePhotographes.innerHTML + objetPhotographe.createComposant()
  }
}}

//fonction recupere les elements
async function recupereElementPhotographe(photographe){
  var lesPhotographes = new ArtistesFactory();
  return lesPhotographes.creatArtistes("photographe", "photos/sample%20Photos/Photographers%20ID%20Photos/" + photographe.portrait, photographe.id, photographe.name, photographe.city, photographe.country, photographe.tagline, photographe.price+ "€/jour", photographe.tags)}

