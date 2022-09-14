import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * Add Song Transaction
 * 
 * 
 * 
 * @author Jake Papaspiridakos
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex,title,artist,youTubeId) {
        super();
        this.model = initModel;
        this.initIndex = initIndex;
        this.title = title;
        this.artist = artist;
        this.youTubeId = youTubeId;
    }

    doTransaction() {
        this.model.removeSong(this.initIndex);
    }
    
    undoTransaction() {
        this.model.addSpecificSong(this.title,this.artist,this.youTubeId);
        this.model.moveSong(this.model.currentList.songs.length-1,this.initIndex);
    }
}