// creation des types de classes specifiques aux medias
class Photo{
  constructor(){
    this._type = "photo"
       }
}
class Courtmetrage{
  constructor(){
    this._type = "courtmetrage"
       }
}

//création factory method qui permet de fabriquer le composant générique
class MediaFactory{
  //permet de creer la fabrique des medias
  constructor(){
    //fonction avec les paramètre de la création d'un media
    this.createMedia= function(type, medias, title, like, heart){
      let media

      //conditions qui permetent de gerer la création des medias specifiques
      if (type == "courtmetrage") {
        media = new Courtmetrage()
      }
      if (type == "photo") {
      media = new Photo()
       }

       //ajout des caracteristiques des medias
      media.medias = medias;
      media.title = title;
      media.like = like;
      


//fonction qui crait le composant média
      media.creatComposant = function(){
      var composantElementMedia= `<div class="contenairMedia">
<div class="photoIdPhotographes"><img src="` + media.medias +`"></div>
<div class="title"> `+ media.title + `</div>
<div class="likes"> `+ media.like + `</div>
<div class="heart"> <i class="fas fa-heart"></i></div>
</div>`

    return composantElementMedia
      }
      return media
    }
  }
}

//variable qui permet de creer une nouvelle fabrique - instance de fabrique
let lesMedias = new MediaFactory()


//fonction qui ajoute le composant et le contenu dans la page html
async function ajoutComposantDansMediasPhotographes(idPhotographes){
var listeMedias = document.querySelector("#listeDesMediasDuPhotographe")
var composantMedia = await creationComposantMediaPhotographe (idPhotographes)
for(i=0;i<composantMedia.length;i++){
listeMedias.innerHTML = listeMedias.innerHTML + composantMedia[i]
}
}

//fonction qui permet de creer le composant html
async function creationComposantMediaPhotographe (idPhotographes){
var elementDeLaPhoto = await ajoutMediaDuPhotographe(idPhotographes)
var compteur =0
var listeDesComposants = new Array()
for(i=0;i<elementDeLaPhoto.length;i++){
  var composantElementMedia= elementDeLaPhoto[i].creatComposant()
  listeDesComposants[compteur]= composantElementMedia
  compteur++
}
return listeDesComposants
}
// fonction qui recupere le json
async function recupereJsonMedia(){
  let url = 'http://127.0.0.1:5501/json/FishEyeData.json'
  let rep = await fetch(url, { method: 'GET' });
let reponse = await rep.json();
var tabloMedias = reponse["media"]

return tabloMedias
}

//fonction qui recupere l'élément média, permet de creer le media
async function recuperationElementMedia(idMedia){
// stock le retour de la fonction dans la variable 
var tabloMedias =  await recupereJsonMedia()
//Boucle pour afficher tous les medias
for(i=0;i<tabloMedias.length;i++){
  console.log(tabloMedias[i].id) // recupere les id dans la console
  if(tabloMedias[i].id== idMedia){
var tableauElementsMedia = lesMedias.createMedia("photo","photos/sample%20Photos/Tracy/"+ tabloMedias[i].image,  tabloMedias[i].title, tabloMedias[i].likes)
  }
}
 return tableauElementsMedia
}
// fonction qui affiche tou sles medias
async function ajoutMediaDuPhotographe(idPhotographes){
  var tabloMedias =  await recupereJsonMedia()
  var listeDesMedias = new Array()
var compteur =0
  for(i=0;i<tabloMedias.length;i++){
    if(tabloMedias[i].photographerId== idPhotographes){
      var recuptNomPhotographe = document.querySelector(".nomDuPhotographe")
    var resultatNom =   recuptNomPhotographe.innerHTML

var nomSplit = resultatNom.split(" ")[0]
console.log( nomSplit)
      var tableauElementsMedia = lesMedias.createMedia("photo","photos/sample%20Photos/"+ nomSplit +"/"+ tabloMedias[i].image,  tabloMedias[i].title, tabloMedias[i].likes)
      listeDesMedias[compteur]= tableauElementsMedia
      compteur++
        }
      }
  return listeDesMedias
}















































// var urlPhotographes = document.location.href; 
// console.log(' URL : \n' +urlPhotographes);
// let monIdPhotographe = urlPhotographes.split('=') [1]
// console.log(monIdPhotographe)
// // le photographe
// async function getJSON3(url, numero){
//   let rep = await fetch(url, { method: 'GET' });
//   let reponse = await rep.json();
//  if(reponse["photographers"][numero].id == monIdPhotographe ){
// let presentationDuPhotographe = '';
// presentationDuPhotographe = presentationDuPhotographe + '<div class="card_photographe"> '
// presentationDuPhotographe = presentationDuPhotographe + '<div class="photo_photographe">' + '<img src= " photos/sample%20Photos/Photographers%20ID%20Photos/' + reponse["photographers"][numero].portrait + '"/>' 
// presentationDuPhotographe = presentationDuPhotographe + '</a> '
// presentationDuPhotographe = presentationDuPhotographe + '</div> '
// presentationDuPhotographe = presentationDuPhotographe + '<h2 id="nom"> ' + reponse["photographers"][numero].name+ '</h2> '

// presentationDuPhotographe = presentationDuPhotographe + '<div class="info_photographe"> '
// presentationDuPhotographe = presentationDuPhotographe + '<div class="ville" >' + reponse["photographers"][numero].city + '</div> '
// presentationDuPhotographe = presentationDuPhotographe + '<div class="country">'+reponse["photographers"][numero].country + '</div>'
// presentationDuPhotographe = presentationDuPhotographe + '<div class="tagline">' + reponse["photographers"][numero].tagline + '</div> '
// presentationDuPhotographe = presentationDuPhotographe + '<div class="price">' + reponse["photographers"][numero].price + " €/jour" + '</div> '
// presentationDuPhotographe = presentationDuPhotographe + '<div class ="listeTags">'
// for(j = 0; j<reponse["photographers"][numero]. tags.length;j++){
//   presentationDuPhotographe = presentationDuPhotographe + ' <div class="tags">' + "#" + reponse["photographers"][numero].tags [j]+ ' </div>' 
// }
// presentationDuPhotographe= presentationDuPhotographe + '</div>'
// presentationDuPhotographe = presentationDuPhotographe + '</div> '
// presentationDuPhotographe = presentationDuPhotographe + '</div> '

// presentationDuPhotographe = presentationDuPhotographe + '<div class="id">' + reponse["photographers"][numero].id + '</div>'

// document.querySelector("#presentationDuPhotographe").innerHTML = document.querySelector("#presentationDuPhotographe").innerHTML  + presentationDuPhotographe; 
// }
// return reponse;
// }
// for(i=0;i<6;i++){
//   getJSON3('http://127.0.0.1:5500/json/FishEyeData.json', i)
// }


// //photos & videos
//   async function getJSON2(url, numero){
//     let rep = await fetch(url, { method: 'GET' });
//     let reponse = await rep.json();
//     for(k=0; k<6;k++){
//       if(reponse["photographers"][k].id == monIdPhotographe ){
//         numeroArtiste = k
//     }}
// let str = reponse["photographers"][numeroArtiste].name; 
// let nomDossier = str.split(' ')[0]
// if(monIdPhotographe == reponse["media"][numero].photographerId){


// console.log(nomDossier)
//   let photoDuPhotographe = " " ;
//   photoDuPhotographe = photoDuPhotographe + '<div class="cards_photos">'
//   photoDuPhotographe = photoDuPhotographe + '<div class="card_photo">'
// if(reponse["media"][numero].image){
//  photoDuPhotographe = photoDuPhotographe + '<div class="photo_expo"> <img src="photos/Sample%20Photos/'+ nomDossier + '/' + reponse["media"][numero].image + '"/>'  + '</div>'
//    }else{
//   photoDuPhotographe = photoDuPhotographe + '<div class="photo_expo"> <video controls width="250"><source src="photos/Sample Photos/'+ nomDossier + '/'  + reponse["media"][numero].video + '"  type="video/mp4"></video></div>'
// }
//   photoDuPhotographe = photoDuPhotographe + '<div class="photographerId"> </div>' + reponse["media"][numero].photographerId
//   photoDuPhotographe = photoDuPhotographe + '<div class="description_photo">' + reponse["media"][numero].title + '</div>'
//   photoDuPhotographe = photoDuPhotographe + '<div class="likes_photo">' + reponse["media"][numero].likes + " likes"+ '</div>' 
//   photoDuPhotographe = photoDuPhotographe + '<div class="heart_open" aria-label="likes"><i class="fas fa-heart"></i></div>'
//   photoDuPhotographe = photoDuPhotographe + '<div class="date">' + reponse["media"][numero].date
//   photoDuPhotographe = photoDuPhotographe + '</div>'
//   photoDuPhotographe = photoDuPhotographe + '</div>'
  
//   document.querySelector("#photoDuPhotographe").innerHTML = document.querySelector("#photoDuPhotographe").innerHTML  + photoDuPhotographe; 
  
  
// }
//   return reponse;
// }


// //Boucle pour afficher toutes les photos des photographes
// for(i=0;i<59;i++){
//   getJSON2('http://127.0.0.1:5500/json/FishEyeData.json', i)
// }

// /*-----------fonction et variable media -------------*/
// function media(id, photographerId, title, image,tags,likes, date, price){
// this.id = id;
// this.photographerId = photographerId;
// this.title = title;
// this.image = image;
// this.tags = tags;
// this.likes = likes;
// this.date = date;
// this.price = price;
//    };
//    function mediaVideo(id, photographerId, title, image,tags,likes, date, price){
//     this.id = id;
//     this.photographerId = photographerId;
//     this.title = title;
//     this.video = video;
//     this.tags = tags;
//     this.likes = likes;
//     this.date = date;
//     this.price = price;
//        };

//  var indexImage = 0;
//  var indexVideo = 0;

//   boucles et conditions
//  for (let i =0; i<mydata.media.length;i++){
//    if(mydata.media[i].image){
//   medias[indexImage] = new media (mydata.media[i].id, mydata.media[i].photographerId, mydata.media[i].title, mydata.media[i].image,mydata.media[i].tags,mydata.media[i].likes,mydata.media[i].date,mydata.media[i].price)
//   indexImage++
// }else{
// mediasVideo[indexVideo] = new mediaVideo (mydata.media[i].id, mydata.media[i].photographerId, mydata.media[i].title, mydata.media[i].video, mydata.media[i].tags, mydata.media[i].likes, mydata.media[i].date, mydata.media[i].price)
// indexVideo++
// }
// };

  
  