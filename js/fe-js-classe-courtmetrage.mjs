class Courtmetrage {
    constructor(video) {
        this._type = "courtmetrage";
        //this.baliseMedia = ` <video controls width="250">
        // <source src="`; 
        //this.fermetureBaliseMedia = `"</source></video>`;
        this.baliseMedia = `<img src="`;
        this.fermetureBaliseMedia = `"/>`;
        this.medias = video;
    }
}

export { Courtmetrage };