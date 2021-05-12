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
request.onload = function() {
var informationsmedia = request.response;
console.log(informationsmedia);
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
  var media0 = new media (342550,82,"Fashion Yellow Beach","Fashion_Yellow_Beach.jpg",["fashion"],62,"2011-12-08",55);
  var media1 = new media (8520927,82, "Fashion Urban Jungle","Fashion_Urban_Jungle.jpg",["fashion"], 11,"2011-11-06",55);
  var media2 = new media (9025895,82,"Fashion Pattern on a Pattern", "Fashion_Pattern_on_Pattern.jpg",["fashion"],72, "2013-08-12", 55);
  var media3 = new media (9275938,82,"Wedding Gazebo","Event-_WeddingGazebo.jpg",["events"], 69,"2018-02-22",55);
  var media4 = new media (2053494,82,"Sparkles","Event_Sparklers.jpg",["events"], 2,"2020-05-25",55);
  var media5 = new media (7324238,82,"18th Anniversary","Event_18thAnniversary.jpg",["events"], 33,"2019-06-12",55);
  var mediaVideo0 = new mediaVideo (8328953,82,"Wooden Horse Sculpture","Art_Wooden_Horse_Sculpture.mp4",["art"], 24,"2011-12-08",100);
  var media6 = new media (7502053,82,"Triangle Man","Art_Triangle_Man.jpg",["art"], 88,"2007-05-07",55);
  var media7 = new media (8523492,82,"Purple Tunnel","Art_Purple_light.jpg",["art"], 24,"2018-05-05",55);
  var media8 = new media (75902334,82,"Art Mine","Art_Mine.jpg",["art"], 75,"2019-11-25",55);
  var media9 = new media (73852953,925,"8 Rows","Sport_2000_with_8.jpg",["sport"], 52,"2013-02-30",70);
  var media10 = new media (92758372,925,"Fashion Wings","Fashion_Wings.jpg",["fashion"], 58,"2018-07-17",70);
  var media11 = new media (32958383,925,"Melody Red on Stripes","Fashion_Melody_Red_on_Stripes.jpg",["fashion"], 11,"2019-08-12",70);
  var media12 = new media (928587383,925,"Venture Conference","Event_VentureConference.jpg",["events"], 2,"2019-01-02",70);
  var media13 = new media (725639493,925,"Product Pitch","Event_ProductPitch.jpg",["events"], 3,"2019-05-20",70);
  var media14 = new media (23394384,925,"Musical Festival Keyboard","Event_KeyboardCheck.jpg",["events"], 52,"2019-07-18",70);
  var media15 = new media (87367293,925,"Musical Festival Singer","Event_Emcee.jpg",["events"], 23,"2018-02-22",70);
  var media16 = new media (593834784,925,"Animal Majesty","Animals_Majesty.jpg",["animals"], 52,"2017-03-13",70);
  var mediaVideo1 = new mediaVideo (83958935,925,"Cute Puppy on Sunset","Animals_Puppiness.mp4",["animals"], 52,"2016-06-12",70);
  var mediaVideo2 = new mediaVideo (394583434,527,"Rock Mountains","Travel_Rock_Mountains.mp4",["travel"], 23,"2017-03-18",45);
  var media17 = new media (343423425,527,"Outdoor Baths","Travel_Outdoor_Baths.jpg",["travel"], 101,"2017-04-03",45);
  var media18 = new media (73434243,527,"Road into the Hill","Travel_Road_into_Hill.jpg",["travel"], 99,"2018-04-30",45);
  var media19 = new media (23425523,527,"Bridge into the Forest","Travel_Bridge_into_Forest.jpg",["travel"], 34,"2016-04-05",45);
  var media20 = new media (23134513,527,"Boat Wonderer","Travel_Boat_Wanderer.jpg",["travel"], 23,"2017-03-18",45);
  var media21 = new media (92352352,527,"Portrait Sunkiss","Portrait_Sunkissed.jpg",["portrait"], 66,"2018-05-24",45);
  var media22 = new media (34513453,527,"Shaw Potrait","Portrait_Shaw.jpg",["portait"], 52,"2017-04-21",45);
  var media23 = new media (23523533,527,"Alexandra","Portrait_Alexandra.jpg",["portait"], 95,"2018-11-02",45);
  var media24 = new media (525834234,527,"Afternoon Break","Portrait_AfternoonBreak.jpg",["portait"], 25,"2019-01-02",45);
  var media25 = new media (623534343,243,"Lonesome","Travel_Lonesome.jpg",["travel"], 88,"2019-02-03",45);
  var media26 = new media (625025343,243,"Hillside Color","Travel_HillsideColor.jpg",["travel"], 85,"2019-04-03",45);
  var media27 = new media (2525345343,243,"Wednesday Potrait","Portrait_Wednesday.jpg",["portait"], 34,"2019-04-07",45);
  var media28 = new media (2523434634,243,"Nora Portrait","Portrait_Nora.jpg",["portait"], 63,"2019-04-07",45);
  var media29 = new media (398847109,243,"Raw Black Portrait","Portrait_Background.jpg",["portait"], 55,"2019-06-20",45);
  var media30 = new media (2534342,243,"Seaside Wedding","Event_SeasideWedding.jpg",["events"], 25,"2019-06-21",45);
  var media31 = new media (65235234,243,"Boulder Wedding","Event_PintoWedding.jpg",["events"], 52,"2019-06-25",45);
  var media32 = new media (23523434,243,"Benevides Wedding","Event_BenevidesWedding.jpg",["events"], 77,"2019-06-28",45);
  var mediaVideo3 = new mediaVideo (5234343,243,"Wild Horses in the Mountains","Animals_Wild_Horses_in_the_mountains.mp4",["animals"], 142,"2019-08-23",60);
  var media33 = new media (95234343,243,"Rainbow Bird","Animals_Rainbow.jpg",["animals"], 59,"2019-07-02",60);
  var media34 = new media (52343416,195,"Japanese Tower, Kyoto","Travel_Tower.jpg",["travel"], 25,"2019-04-03",60);
  var media35 = new media (2523434,195,"Senset on Canals, Venice","Travel_SunsetonCanals.jpg",["travel"], 53,"2019-05-06",60);
  var media36 = new media (95293534,195,"Mountain and Lake","Travel_OpenMountain.jpg",["travel"], 33,"2019-05-12",60);
  var media37 = new media (356234343,195,"City Bike and Stair, Paris","Travel_Bike_and_Stair.jpg",["travel"], 53,"2019-06-20",60);
  var media38 = new media (235234343,195,"Adventure Door, India","Travel_Adventure_Door.jpg",["travel"], 63,"2019-06-26",60);
  var media39 = new media (6234234343,195,"Contrast, St Petersburg","Architecture_Contrast.jpg",["architecture"], 52,"2019-06-30",60);
  var media40 = new media (6525666253,195,"On a Hill, Tibet","Architecture_On_a_hill.jpg",["architecture"], 63,"2019-07-20",60);
  var media41 = new media (98252523433,195,"Leaning Tower, Pisa","Architecture_Dome.jpg",["architecture"], 88,"2020-01-05",60);
  var mediaVideo4 = new mediaVideo (9259398453,195,"Circle Highways, Buenos Aires","Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",["architecture"], 57,"2020-01-20",65);
  var media42 = new media (3523523534,195,"Corner Building and Blue Sky","Architecture_Corner_Room.jpg",["architecture"], 54,"2020-05-05",60);
  var mediaVideo5 = new mediaVideo (952343423,930,"Tricks in the Air","Sport_Tricks_in_the_air.mp4",["sport"], 150,"2018-02-30",70);
  var media43 = new media (235234343,930,"Climber","Sport_Next_Hold.jpg",["sport"], 101,"2018-03-05",65);
  var media44 = new media (235343222,930,"Surfer","sport_water_tunnel.jpg",["sport"], 103,"2018-03-10",70);
  var media45 = new media (7775342343,930,"Skier","Sport_Sky_Cross.jpg",["sport"], 77,"2018-04-16",50);
  var media46 = new media (9253445784,930,"Race End","Sport_Race_End.jpg",["sport"], 88,"2018-04-22",65);
  var media47 = new media (22299394,930,"Jump!","Sport_Jump.jpg",["sport"], 95,"2018-04-27",70);
  var media48 = new media (3452342633,930,"White Light","Architecture_White_Light.jpg",["architecture"], 52,"2018-05-03",75);
  var media49 = new media (939234243,930,"Water on Modern Building","Architecture_Water_on_Modern.jpg",["architecture"], 55,"2018-05-10",72);
  var media50 = new media (222959233,930,"Horseshoe","Architecture_Horseshoe.jpg",["architecture"], 85,"2018-05-15",71);
  var media51 = new media (965933434,930,"Cross Bar","Architecture_Cross_Bar.jpg",["architecture"], 66,"2018-05-20",58);
  var media52 = new media (777723343,930,"Connected Curves","Architecture_Connected_Curves.jpg",["architecture"], 79,"2018-05-21",80);
   