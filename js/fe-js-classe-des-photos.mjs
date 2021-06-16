// creation des types de classes specifiques aux medias
class Photo {
    constructor(image) {
        this._type = "photo";
        this.baliseMedia = `<img src="`;
        this.fermetureBaliseMedia = `"/>`;
        this.medias = image;
  

    }
}
  
  
export { Photo };