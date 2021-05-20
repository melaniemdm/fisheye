var urlPhotographes = document.location.href; 
console.log(' URL : \n' +urlPhotographes);
let monIdPhotographe = urlPhotographes.split('=') [1]
console.log(monIdPhotographe)
// le photographe
async function getJSON3(url, numero){
  let rep = await fetch(url, { method: 'GET' });
  let reponse = await rep.json();
 if(reponse["photographers"][numero].id == monIdPhotographe ){
let presentationDuPhotographe = '';
presentationDuPhotographe = presentationDuPhotographe + '<div class="card_photographe"> '
presentationDuPhotographe = presentationDuPhotographe + '<div class="photo_photographe">' + '<img src= " photos/sample%20Photos/Photographers%20ID%20Photos/' + reponse["photographers"][numero].portrait + '"/>' 
presentationDuPhotographe = presentationDuPhotographe + '</a> '
presentationDuPhotographe = presentationDuPhotographe + '</div> '
presentationDuPhotographe = presentationDuPhotographe + '<h2 id="nom"> ' + reponse["photographers"][numero].name+ '</h2> '

presentationDuPhotographe = presentationDuPhotographe + '<div class="info_photographe"> '
presentationDuPhotographe = presentationDuPhotographe + '<div class="ville" >' + reponse["photographers"][numero].city + '</div> '
presentationDuPhotographe = presentationDuPhotographe + '<div class="country">'+reponse["photographers"][numero].country + '</div>'
presentationDuPhotographe = presentationDuPhotographe + '<div class="tagline">' + reponse["photographers"][numero].tagline + '</div> '
presentationDuPhotographe = presentationDuPhotographe + '<div class="price">' + reponse["photographers"][numero].price + " €/jour" + '</div> '
presentationDuPhotographe = presentationDuPhotographe + '<div class ="listeTags">'
for(j = 0; j<reponse["photographers"][numero]. tags.length;j++){
  presentationDuPhotographe = presentationDuPhotographe + ' <div class="tags">' + "#" + reponse["photographers"][numero].tags [j]+ ' </div>' 
}
presentationDuPhotographe= presentationDuPhotographe + '</div>'
presentationDuPhotographe = presentationDuPhotographe + '</div> '
presentationDuPhotographe = presentationDuPhotographe + '</div> '

presentationDuPhotographe = presentationDuPhotographe + '<div class="id">' + reponse["photographers"][numero].id + '</div>'

document.querySelector("#presentationDuPhotographe").innerHTML = document.querySelector("#presentationDuPhotographe").innerHTML  + presentationDuPhotographe; 
}
return reponse;
}
for(i=0;i<6;i++){
  getJSON3('http://127.0.0.1:5500/json/FishEyeData.json', i)
}


//photos & videos
  async function getJSON2(url, numero){
    let rep = await fetch(url, { method: 'GET' });
    let reponse = await rep.json();
    for(k=0; k<6;k++){
      if(reponse["photographers"][k].id == monIdPhotographe ){
        numeroArtiste = k
    }}
let str = reponse["photographers"][numeroArtiste].name; 
let nomDossier = str.split(' ')[0]
if(monIdPhotographe == reponse["media"][numero].photographerId){


console.log(nomDossier)
  let photoDuPhotographe = " " ;
  photoDuPhotographe = photoDuPhotographe + '<div class="cards_photos">'
  photoDuPhotographe = photoDuPhotographe + '<div class="card_photo">'
if(reponse["media"][numero].image){
 photoDuPhotographe = photoDuPhotographe + '<div class="photo_expo"> <img src="photos/Sample%20Photos/'+ nomDossier + '/' + reponse["media"][numero].image + '"/>'  + '</div>'
   }else{
  photoDuPhotographe = photoDuPhotographe + '<div class="photo_expo"> <video controls width="250"><source src="photos/Sample Photos/'+ nomDossier + '/'  + reponse["media"][numero].video + '"  type="video/mp4"></video></div>'
}
  photoDuPhotographe = photoDuPhotographe + '<div class="photographerId"> </div>' + reponse["media"][numero].photographerId
  photoDuPhotographe = photoDuPhotographe + '<div class="description_photo">' + reponse["media"][numero].title + '</div>'
  photoDuPhotographe = photoDuPhotographe + '<div class="likes_photo">' + reponse["media"][numero].likes + " likes"+ '</div>' 
  photoDuPhotographe = photoDuPhotographe + '<div class="heart_open" aria-label="likes"><i class="fas fa-heart"></i></div>'
  photoDuPhotographe = photoDuPhotographe + '<div class="date">' + reponse["media"][numero].date
  photoDuPhotographe = photoDuPhotographe + '</div>'
  photoDuPhotographe = photoDuPhotographe + '</div>'
  
  document.querySelector("#photoDuPhotographe").innerHTML = document.querySelector("#photoDuPhotographe").innerHTML  + photoDuPhotographe; 
  
  
}
  return reponse;
}


//Boucle pour afficher toutes les photos des photographes
for(i=0;i<59;i++){
  getJSON2('http://127.0.0.1:5500/json/FishEyeData.json', i)
}

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

  
  