// variable globale pour gérer suivant et précédent
let mediaEnCours;

export function chargeGallery(noeudHTML){
    let composantGalleryHTML = `
        <div id="gallery">
            <div id="media">
            </div>
            <div id="miniature">
            </div>
            <div id="closeCross"><span class="material-icons-outlined">
            close
            </span></div>
            <div id="leftArrow"><span class="material-icons-outlined">
            chevron_left
            </span></div>
            <div id="rightArrow"><span class="material-icons-outlined">
            chevron_right
            </span></div>            
        </div>`;

    noeudHTML.innerHTML =  noeudHTML.innerHTML + composantGalleryHTML;
  
}

document.addEventListener("click",openGallery);

function openGallery(e){
    window.addEventListener("keydown",navigationGallery);
    
    if(e.target.className === "galleryItem"){
        displayGallery(e.target);
    }
    if (e.target.id === "gallery" || e.target.parentNode.id === "closeCross"){
        closeGallery();
    }
    if(e.target.parentNode.id === "leftArrow"){
        displayMediaPrecedent();
    }
    if(e.target.parentNode.id === "rightArrow"){
        displayMediaSuivant();
    }
    if(e.target.className === "miniatureItem"){
        mediaEnCours = e.target;
        displayGallery(mediaEnCours);
    }
}

function navigationGallery(event){
    if(event.keyCode === 37){
        displayMediaPrecedent();
    }
    if(event.keyCode === 39){
        displayMediaSuivant();
    }
    if(event.keyCode === 27){
        closeGallery();
    }       
}

function displayMediaPrecedent(){
    if (mediaEnCours.parentNode.previousElementSibling!==null){
        mediaEnCours = mediaEnCours.parentNode.previousElementSibling.firstChild;
        displayGallery(mediaEnCours);
    }
}

function displayMediaSuivant(){

    if (mediaEnCours.parentNode.nextElementSibling && (mediaEnCours.parentNode.nextElementSibling.classList.contains("light-link") ||mediaEnCours.parentNode.nextElementSibling.classList.contains("miniature"))){
        mediaEnCours = mediaEnCours.parentNode.nextElementSibling.firstChild;
        displayGallery(mediaEnCours);
    }
}

function closeGallery(){
    document.querySelector("#gallery").style.visibility = "hidden";
    window.removeEventListener("keydown",navigationGallery);
}

function displayGallery(noeudHTML){
    mediaEnCours = noeudHTML;

    document.querySelector("#gallery").style.visibility = "visible";
    if (mediaEnCours.parentNode.classList.contains("miniature")===true){
        if (mediaEnCours.parentNode.classList.contains("courtmetrage")===true){
            document.querySelector("#media").innerHTML = `
                <video
                controls
                autoplay
                preload="auto"
                data-setup="{}"src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `">
                    <source src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>`;
        }else{
            document.querySelector("#media").innerHTML = `<img src="` + mediaEnCours.parentNode.children[0].src + `"/>`;
        }
    }else{
        if (mediaEnCours.parentNode.classList.contains("courtmetrage")===true){
            document.querySelector("#media").innerHTML = `
                <video
                controls
                autoplay
                preload="auto"
                data-setup="{}"src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `">
                    <source src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>`;
        }else{
            document.querySelector("#media").innerHTML = `<img src="` + noeudHTML.parentNode.href + `"/>`;
        }
    }
    
}