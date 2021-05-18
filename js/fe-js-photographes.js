

async function getJSON(url, numero){
  let rep = await fetch(url, { method: 'GET' });
  let reponse = await rep.json();
 
let presentationPhotographes = '';
presentationPhotographes = presentationPhotographes + '<div class="card_photographe"> '
presentationPhotographes = presentationPhotographes + '<div class="photo_photographe">' + '<img src= " photos/sample%20Photos/Photographers%20ID%20Photos/' + reponse["photographers"][numero].portrait + '"/>' 
presentationPhotographes = presentationPhotographes + '</a> '
presentationPhotographes = presentationPhotographes + '</div> '
presentationPhotographes = presentationPhotographes + '<h2 id="nom"> ' + reponse["photographers"][numero].name+ '</h2> '

presentationPhotographes = presentationPhotographes + '<div class="info_photographe"> '
presentationPhotographes = presentationPhotographes + '<div class="ville" >' + reponse["photographers"][numero].city + '</div> '
presentationPhotographes = presentationPhotographes + '<div class="country">'+reponse["photographers"][numero].country + '</div>'
presentationPhotographes = presentationPhotographes + '<div class="tagline">' + reponse["photographers"][numero].tagline + '</div> '
presentationPhotographes = presentationPhotographes + '<div class="price">' + reponse["photographers"][numero].price + " €/jour" + '</div> '
presentationPhotographes = presentationPhotographes + '<div class ="listeTags">'
for(j = 0; j<reponse["photographers"][numero]. tags.length;j++){
  presentationPhotographes = presentationPhotographes + ' <div class="tags">' + "#" + reponse["photographers"][numero].tags [j]+ ' </div>' 
}
presentationPhotographes= presentationPhotographes + '</div>'
presentationPhotographes = presentationPhotographes + '</div> '
presentationPhotographes = presentationPhotographes + '</div> '

document.querySelector("#presentationPhotographes").innerHTML = document.querySelector("#presentationPhotographes").innerHTML  + presentationPhotographes; 

  return reponse;
}
   

//Boucle pour afficher tous les photographes
for(i=0;i<6;i++){
  getJSON('http://127.0.0.1:5500/json/FishEyeData.json', i)
}




class photographers {
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
  }
};
  

 

