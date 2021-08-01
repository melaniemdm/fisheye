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
    console.log(e.target);
    if(e.target.className === "galleryItem"){
        document.querySelector("#gallery").style.visibility = "visible";
        document.querySelector("#media").innerHTML = `<img src="` + e.target.parentNode.href + `"/>`;
    }
    if (e.target.id === "gallery" || e.target.parentNode.id === "closeCross"){
        closeGallery();
    }
    if(e.target.parentNode.id === "leftArrow"){
        goLeft();
    }
    if(e.target.parentNode.id === "rightArrow"){
        goRight();
    }
}

function navigationGallery(event){
    if(event.keyCode === 37){
        goLeft();
    }
    if(event.keyCode === 39){
        goRight();
    }
    if(event.keyCode === 27){
        closeGallery();
    }       
}

function goLeft(){
    alert("image précédente");
}

function goRight(){
    alert("image suivante");
}

function closeGallery(){
    document.querySelector("#gallery").style.visibility = "hidden";
    window.removeEventListener("keydown",navigationGallery);
}