/* class Courtmetrage pour les medias des photographes au format video */
/*---ajoute le fichier video dans la variable media---*/
class Courtmetrage {
    constructor(video) {
        this._type = "courtmetrage";
        this.medias = video;
    }
}
export { Courtmetrage };