const btnContact= document.querySelector("#btn-contact")
btnContact.addEventListener("click", chargeForm);

const formCharge= document.querySelector("#formulaire")

function chargeForm(){
    formCharge.style.visibility="visible"
}

const close= document.querySelectorAll(".close")
close.forEach((btn) => btn.addEventListener("click", fermModal))

function fermModal(){
    formCharge.style.visibility="hidden"  
}

const envoiForm=document.querySelector(".btn-valide")
envoiForm.addEventListener("click", chargeModalFin )

const modalMessageFin = document.querySelector(".modalFin")

function chargeModalFin(){
    modalMessageFin.style.visibility="visible"
    fermModal()  
}
function fermeModalFin(){
    modalMessageFin.style.visibility="hidden"  
}
const fermeForm=document.querySelectorAll(".btn-closeFin")
fermeForm.forEach((btn) => btn.addEventListener("click", fermeModalFin ))

