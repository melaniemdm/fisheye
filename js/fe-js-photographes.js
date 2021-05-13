
function getContenuJson(){
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
let contenuJson = JSON.parse("{}");
let photographes = ["toto"];

request.onload = function () {
 
var informationsphotographers = request.response;
console.log(informationsphotographers); // test
contenuJson=JSON.parse(JSON.stringify(informationsphotographers));
console.log(contenuJson.photographers[1].name);// pour verifier que ca fonctionne
for (let i =0; i < Object.keys(contenuJson.photographers).length;i++){
monPhotographes = new photographers(contenuJson.photographers[i].name, contenuJson.photographers[i].id, contenuJson.photographers[i].city, contenuJson.photographers[i].country,contenuJson.photographers[i].tags, contenuJson.photographers[i].tagline, contenuJson.photographers[i].price, contenuJson.photographers[i].portrait)
photographes.push(monPhotographes)
 
} 
}
console.log(photographes)
return photographes
}

let contenuJson = getContenuJson();
console.log(contenuJson)


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
  

 




// var compteur = 0;

// contenuJson.photographers.forEach(infoPhotographe => { photographes[compteur] = new photographers(contenuJson.infoPhotographe.name, contenuJson.infoPhotographe.id, contenuJson.infoPhotographe.city, contenuJson.infoPhotographe.country,contenuJson.infoPhotographe.tags, contenuJson.infoPhotographe.tagline, contenuJson.infoPhotographe.price, contenuJson.infoPhotographe.portrait);
// compteur++  
// });
