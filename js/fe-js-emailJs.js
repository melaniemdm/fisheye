
/* recupere ermùailjs que l'on a charger dans la page html (media des photographes)*/
let emailjs = window.emailjs;
/* onction fonctionnement envoie des mails - message */
export function sendEmail(fullName, userEmail, userMessage){
    var contactParams = {
        from_name: fullName,
        reply_to: userEmail,
        message: userMessage,
    };
    emailjs.init("user_7tR9LJzR8U8F0vQka347x");
   
    //affiche les infos dansd la console (demandé ds note de réunion)
    console.log(contactParams);
    //ou
    console.log(contactParams.from_name);
    console.log(contactParams.reply_to);
    console.log(contactParams.message);

    //permet d'envoyer le mail - decommenter la ligne ci dessous pour envopyer le mail
    // emailjs.send("service_ahy6xbq", "template_ylvldvg", contactParams)
}
