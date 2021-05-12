//charge l'URL du fichier JSON
var requestURL = "http://127.0.0.1:5500/json/FishEyeData.json"
//créer une requête
var request = new XMLHttpRequest();
//ouvrir une nouvelle requête
request.open('GET', requestURL);
//attribution de la valeur 'json'
request.responseType = 'json';
request.send();
//réponse du serveur et son traitement
var mydata = "";
request.onload = function() {
var informationsmedia = request.response;
console.log(informationsmedia);
mydata=informationsmedia;
console.log(mydata.media[0].id);// pour verifier que ca fonctionne
  }


/*-----------fonction et variable media -------------*/
function media(id, photographerId, title, image,tags,likes, date, price){
this.id = id;
this.photographerId = photographerId;
this.title = title;
this.image = image;
this.tags = tags;
this.likes = likes;
this.date = date;
this.price = price;
   };
   function mediaVideo(id, photographerId, title, image,tags,likes, date, price){
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
       };

 var indexImage = 0;
 var indexVideo = 0;

  // boucles et conditions
 for (let i =0; i<mydata.media.length;i++){
   if(mydata.media[i].image){
  medias[indexImage] = new media (mydata.media[i].id, mydata.media[i].photographerId, mydata.media[i].title, mydata.media[i].image,mydata.media[i].tags,mydata.media[i].likes,mydata.media[i].date,mydata.media[i].price)
  indexImage++
}else{
mediasVideo[indexVideo] = new mediaVideo (mydata.media[i].id, mydata.media[i].photographerId, mydata.media[i].title, mydata.media[i].video, mydata.media[i].tags, mydata.media[i].likes, mydata.media[i].date, mydata.media[i].price)
indexVideo++
}
};

  
 
  
