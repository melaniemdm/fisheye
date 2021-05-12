
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
var informationsphotographers = request.response;
console.log(informationsphotographers);
mydata=informationsphotographers;
console.log(mydata.photographers[0].name);// pour verifier que ca fonctionne
}

 
function photographers(name, id, city, country, tags,tagline, price,portrait ){
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait
  };
  
 // boucles 
 for (let i =0; i<mydata.photographers.length;i++){
photographes[i] = new photographers(mydata.photographes[i].name, mydata.photographes[i].id, mydata.photographers[i].city, mydata.photographers[i].country,mydata.photographers[i].tags, mydata.photographers[i].tagline, mydata.photographers[i].price, mydata.photographers[i].portrait);
} 