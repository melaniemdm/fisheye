// creation des types de classes specifiques aux artistes (dans le cas ou ils y auraient d'autres artistes autres que des photographes)
class Photographe{
  constructor(){
    this._type = "photographe"
       }
}
//création factory method qui permet de fabriquer le composant générique
class ArtistesFactory{
   //permet de creer la fabrique des Artistes
  constructor(){
    //fonction avec les paramètre de la création d'un artiste
    this.createArtistes = function(type, photo, id, nom, city, country, tagline, price, tags ){
let artiste
//condition qui permet de gerer la création des artistes specifiques
if (type == "photographe") {
  artiste = new Photographe ()     
}

//ajout des caracteristiques des artistes
artiste.photo =photo;
artiste.id =id;
artiste.nom =nom;
artiste.city =city;
artiste.country =country;
artiste.tagline =tagline;
artiste.price =price;
artiste.tag =tags;


//fonction qui creait le composant Artiste
artiste.createComposant=function(){
  var strComposant = 
  `<div class="contenairPhotographe">
  <a href="medias-des-photographe.html?idPhotographe=` + artiste.id + `">
  <div class="photoIdDuPhotographe">
      <img src=" `+ artiste.photo + `">
  </div>
  <div class="nomDuPhotographe">`+ artiste.nom +` </div>
  <div class="cityDuPhotographe">`+ artiste.city +` </div> <div class="countryDuPhotographes">`+artiste.country +` </div>
  <div class="taglineDuPhotographe"> `+ artiste.tagline +`</div>
  <div class="priceDuPhotographe">`+ artiste.price + `</div>`
     '<div class ="tagsDuPhotographe">'
//  boucle qui permet de mettre le #
  artiste.tag.forEach(element => {
    strComposant = strComposant+ ' <div class="tags">' + "#" + element + ' </div>'
       });
  strComposant = strComposant + `</a>`+ `</div>`
    

  return strComposant

  }
return artiste
}}}

//variable qui permet de creer une nouvelle fabrique - instance de fabrique
let lesPhotographes = new ArtistesFactory()
//fonction qui ajoute le composant et le contenu dans la page html
async function ajoutComposantDansIndex(idPhotographe){
var listePhotographes = document.querySelector("#listeDesPhotographes")
var composant = await creationComposantPhotographe(idPhotographe)
listePhotographes.innerHTML = listePhotographes.innerHTML + composant
}

//fonction qui permet de creer le composant html
async function creationComposantPhotographe (idPhotographe){
var elementsDuPhotographe = await recuperationDonneesPhotographe(idPhotographe);
var composantPhotographe = elementsDuPhotographe.createComposant()
 return composantPhotographe
}
// fonction qui recupere le json
async function recupereJson(){
  let url = 'http://127.0.0.1:5501/json/FishEyeData.json'
  let rep = await fetch(url, { method: 'GET' });
let reponse = await rep.json();
var tabloPhotographes = reponse["photographers"]
console.log(tabloPhotographes.length)
return tabloPhotographes
}

//fonction qui recupere les éléments de l'artiste
async function recuperationDonneesPhotographe(idPhotographe){
 // stock le retour de la fonction dans la variable 
var tabloPhotographes =  await recupereJson()

//Boucle pour afficher tous les photographes
for(i=0;i<tabloPhotographes.length;i++){
  console.log(tabloPhotographes[i].id)
  if(tabloPhotographes[i].id== idPhotographe){
var tableauElementsPhotographes = lesPhotographes.createArtistes("photographe","photos/sample%20Photos/Photographers%20ID%20Photos/"+ tabloPhotographes[i].portrait, tabloPhotographes[i].id, tabloPhotographes[i].name,tabloPhotographes[i].city, tabloPhotographes[i].country, tabloPhotographes[i].tagline,tabloPhotographes[i].price + "€/jour",tabloPhotographes[i].tags )
  }
}
return tableauElementsPhotographes 
}


// fonction qui permet d'afficher tous les photographes
async function ajoutTousLesPhotographes (){
  var tabloPhotographes =  await recupereJson()
//Boucle pour afficher tous les photographes
for(i=0;i<tabloPhotographes.length;i++){
  ajoutComposantDansIndex(tabloPhotographes[i].id)
}}
































// async function getJSON(url, numero){
//   let rep = await fetch(url, { method: 'GET' });
//   let reponse = await rep.json();
 
// let presentationPhotographes = '';
// presentationPhotographes = presentationPhotographes + '<div class="card_photographe"><a href="photographe.html?id=' + reponse["photographers"][numero].id + '">'
// presentationPhotographes = presentationPhotographes + '<div class="photo_photographe">' + '<img src= " photos/sample%20Photos/Photographers%20ID%20Photos/' + reponse["photographers"][numero].portrait + '"/>' 
// presentationPhotographes = presentationPhotographes + '</a> '
// presentationPhotographes = presentationPhotographes + '</div> '
// presentationPhotographes = presentationPhotographes + '<h2 id="nom"> ' + reponse["photographers"][numero].name+ '</h2> '

// presentationPhotographes = presentationPhotographes + '<div class="info_photographe"> '
// presentationPhotographes = presentationPhotographes + '<div class="ville" >' + reponse["photographers"][numero].city + '</div> '
// presentationPhotographes = presentationPhotographes + '<div class="country">'+reponse["photographers"][numero].country + '</div>'
// presentationPhotographes = presentationPhotographes + '<div class="tagline">' + reponse["photographers"][numero].tagline + '</div> '
// presentationPhotographes = presentationPhotographes + '<div class="price">' + reponse["photographers"][numero].price + " €/jour" + '</div> '
// presentationPhotographes = presentationPhotographes + '<div class ="listeTags">'
// for(j = 0; j<reponse["photographers"][numero]. tags.length;j++){
//   presentationPhotographes = presentationPhotographes + ' <div class="tags">' + "#" + reponse["photographers"][numero].tags [j]+ ' </div>' 
// }
// presentationPhotographes= presentationPhotographes + '</div>'
// presentationPhotographes = presentationPhotographes + '</div> '
// presentationPhotographes = presentationPhotographes + '</a> '
// presentationPhotographes = presentationPhotographes + '</div> '

// document.querySelector("#presentationPhotographes").innerHTML = document.querySelector("#presentationPhotographes").innerHTML  + presentationPhotographes; 

//   return reponse;
// }
   

// //Boucle pour afficher tous les photographes
// for(i=0;i<6;i++){
//   getJSON('http://127.0.0.1:5500/json/FishEyeData.json', i)
// }




// class photographers {
//   constructor(name, id, city, country, tags, tagline, price, portrait) {
//     this.name = name;
//     this.id = id;
//     this.city = city;
//     this.country = country;
//     this.tags = tags;
//     this.tagline = tagline;
//     this.price = price;
//     this.portrait = portrait;
//   }
// };
  

 

