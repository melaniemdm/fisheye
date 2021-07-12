/* class Photo pour les medias des photographes au format image */
/*---ajoute le fichier image dans la variable media---*/
class Photo {
    constructor(image) {
        this._type = "photo";
        this.medias = image;
    }
}
export { Photo };