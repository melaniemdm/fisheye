

async function getJSON(url, numero){
  let rep = await fetch(url, { method: 'GET' });
  let reponse = await rep.json();
 
let toto = '';
toto = toto + '<div class="card_photographe"> '
toto = toto + '           <div class="photo_photographe">' + '<img src= " photos/sample%20Photos/Photographers%20ID%20Photos/' + reponse["photographers"][numero].portrait + '"/>' 
             
toto = toto + '           </a> '
toto = toto + '            </div> '
toto = toto + '           <h2 id="nom"> ' + reponse["photographers"][numero].name+ '</h2> '

toto = toto + '          <div class="info_photographe"> '
toto = toto + '          <div id="ville" >' + reponse["photographers"][numero].city + '</div> '
toto = toto + '          <div id="country">'+reponse["photographers"][numero].country + '</div>'
toto = toto + '          <div id="tagline">' + reponse["photographers"][numero].tagline + '</div> '
toto = toto + '           <div id="price">' + reponse["photographers"][numero].price + " €/jour" + '</div> '
toto = toto + '<div class ="listeTags">'
for(j = 0; j<reponse["photographers"][numero]. tags.length;j++){
  toto = toto + ' <div class="tags">' + "#" + reponse["photographers"][numero].tags [j]+ ' </div>' 
}
 toto= toto + '</div>'
toto = toto + '           </div> '
toto = toto + '       </div> '

document.querySelector("#toto").innerHTML = document.querySelector("#toto").innerHTML  + toto; 

  return reponse;
}
   


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
  

 

